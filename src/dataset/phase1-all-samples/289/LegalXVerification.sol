// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract LegalXVerification {
    struct Document {
        bytes32 documentHash;
        address owner;
        uint256 timestamp;
        bool isVerified;
    }

    mapping(bytes32 => Document) public documents;

    event DocumentAdded(bytes32 indexed documentHash, address indexed owner);
    event DocumentVerified(bytes32 indexed documentHash, address indexed verifier);

    function addDocument(bytes32 _documentHash) public {
        require(documents[_documentHash].owner == address(0), "Document already exists");
        
        documents[_documentHash] = Document({
            documentHash: _documentHash,
            owner: msg.sender,
            timestamp: block.timestamp,
            isVerified: false
        });

        emit DocumentAdded(_documentHash, msg.sender);
    }

    function verifyDocument(bytes32 _documentHash) public {
        require(documents[_documentHash].owner != address(0), "Document does not exist");
        require(!documents[_documentHash].isVerified, "Document is already verified");

        documents[_documentHash].isVerified = true;
        emit DocumentVerified(_documentHash, msg.sender);
    }

    function getDocument(bytes32 _documentHash) public view returns (Document memory) {
        return documents[_documentHash];
    }
}