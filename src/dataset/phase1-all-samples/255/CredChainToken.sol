// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CredChainToken is ERC721, Ownable {
    struct Credential {
        string institution;
        string program;
        uint256 graduationDate;
        string metadataURI;
    }

    mapping(uint256 => Credential) public credentials;
    uint256 private _tokenIdCounter;

    constructor() ERC721("CredChainToken", "CCT") {}

    function issueCredential(
        address to,
        string memory institution,
        string memory program,
        uint256 graduationDate,
        string memory metadataURI
    ) public onlyOwner {
        uint256 tokenId = _tokenIdCounter;
        _safeMint(to, tokenId);
        credentials[tokenId] = Credential(institution, program, graduationDate, metadataURI);
        _tokenIdCounter++;
    }

    function getCredential(uint256 tokenId) public view returns (Credential memory) {
        require(_exists(tokenId), "Token does not exist");
        return credentials[tokenId];
    }
}