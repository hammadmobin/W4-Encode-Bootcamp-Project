// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol"; //Calling the other contract in this one
import "@openzeppelin/contracts/access/AccessControl.sol";

//renamed contract and added feature ERC721URIStorage

contract SummerNFT is 
    ERC721, 
    AccessControl, 
    ERC721Burnable, 
    ERC721URIStorage 
    
    { 
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    constructor() ERC721("SummerToken", "ST") {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function safeMint(address to, string memory uri, uint256 tokenId) public onlyRole(MINTER_ROLE) {
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
    function tokenURI(tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string)
}

// Based on this: https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#ERC721URIStorage 
we need to implement these functions: 

// tokenURI(tokenId)
// _setTokenURI(tokenId, _tokenURI)
// _burn(tokenId)
