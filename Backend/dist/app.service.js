"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const node_json_db_1 = require("node-json-db");
const JsonDBConfig_1 = require("node-json-db/dist/lib/JsonDBConfig");
const file_data_interface_1 = require("./schemas/file-data.interface");
const ipfs_http_client_1 = require("ipfs-http-client");
const fs_1 = require("fs");
const concat_1 = require("uint8arrays/concat");
const DB_PATH = '../db/db.json';
let AppService = class AppService {
    constructor() {
        this.db = new node_json_db_1.JsonDB(new JsonDBConfig_1.Config(DB_PATH, true, true, '/'));
        this.ipfsClient = (0, ipfs_http_client_1.create)({
            host: 'localhost',
            port: 5001,
            protocol: 'http',
        });
        const data = this.db.getData('/');
        this.lastId =
            data && Object.keys(data).length > 0
                ? Math.max(...Object.keys(data).map((key) => Number(key)))
                : -1;
    }
    pushFile(file) {
        const obj = new file_data_interface_1.FileData(file);
        const fileId = ++this.lastId;
        this.db.push(`/${fileId}`, obj);
        return fileId;
    }
    setMetadata(fileId, metadata) {
        let file;
        try {
            file = this.db.getData(`/${fileId}/file`);
        }
        catch (error) {
            return { error };
        }
        if (!file)
            return false;
        this.db.push(`/${fileId}/metadata`, metadata);
        return this.get(fileId);
    }
    getAll() {
        return this.db.getData('/');
    }
    get(fileId) {
        return this.db.getData(`/${fileId}`);
    }
    getFileStream(filename) {
        const fileStream = (0, fs_1.createReadStream)(`../upload/${filename}`);
        return new common_1.StreamableFile(fileStream);
    }
    isIpfsNodeOnline() {
        try {
            const state = this.ipfsClient.isOnline();
            return state;
        }
        catch (error) {
            return error;
        }
    }
    async saveToIpfs(fileId) {
        const fileData = this.get(fileId);
        const fileLocation = `../upload/${fileData.file.storageName}`;
        const fileBytes = fs.readFileSync(fileLocation);
        const ipfsData = await this.ipfsClient.add(fileBytes);
        this.db.push(`/${fileId}/ipfs`, ipfsData);
        return this.get(fileId);
    }
    async getFromIpfs(fileId) {
        var e_1, _a;
        const fileData = this.get(fileId);
        if (!fileData.ipfs || !fileData.ipfs.path || fileData.ipfs.path.length == 0)
            throw new Error('File not found');
        const ipfsBytes = this.ipfsClient.cat(fileData.ipfs.path);
        const content = [];
        try {
            for (var ipfsBytes_1 = __asyncValues(ipfsBytes), ipfsBytes_1_1; ipfsBytes_1_1 = await ipfsBytes_1.next(), !ipfsBytes_1_1.done;) {
                const chunk = ipfsBytes_1_1.value;
                content.push(chunk);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (ipfsBytes_1_1 && !ipfsBytes_1_1.done && (_a = ipfsBytes_1.return)) await _a.call(ipfsBytes_1);
            }
            finally { if (e_1) throw e_1.error; }
        }
        const fileStream = (0, concat_1.concat)(content);
        return new common_1.StreamableFile(fileStream);
    }
};
AppService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map