//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract BaseContract is ERC721, Ownable {
    string public _name = "GalacticCollectibles";
    string public _symbol = "GAL";
    bool private _locked;

    struct Planet {
        string name;
        string terrain;
        uint256 rarityLevel;
        address owner;
        Status status;
        uint256 price;
    }

    mapping(uint256 => Planet) public tokenIdToPlanetInfo;

    event Created(uint _tokenId);
    event Sold(uint _tokenId);
    event UpforSale(uint _tokenId);
    event Exchanged(uint _tokenId1, uint _tokenId2);
    event Transfered(uint _tokenId);
    event Burned(uint256 _tokenId);

    enum Status {
        ForSale,
        New
    }

    constructor() ERC721(_name, _symbol) Ownable(msg.sender) {}


    modifier noReentrancy() {
        require(!_locked, "Reentrant call");
        _locked = true;
        _;
        _locked = false;
    }

    modifier isOwner(uint _tokenId) {
        require(
            ownerOf(_tokenId) == msg.sender,
            "You can't sell a planet you don't own"
        );
        _;
    }

    modifier isForSale(uint _tokenId) {
        require(
            tokenIdToPlanetInfo[_tokenId].status == Status.ForSale,
            "The planet should be up for sale"
        );
        _;
    }

    modifier hasEnoughFund(uint _tokenId) {
        require(
            msg.value >= tokenIdToPlanetInfo[_tokenId].price,
            "You need to send enough Ether"
        );
        _;
    }

    modifier isOwnerOfEither(address owner1, address owner2) {
        require(
            msg.sender == owner1 || msg.sender == owner2,
            "Sender is not the owner of either planet"
        );
        _;
    }

    function burn(uint256 _tokenId) public isOwner(_tokenId) {
        _burn(_tokenId);
        delete tokenIdToPlanetInfo[_tokenId];
        emit Burned(_tokenId);
    }

    function selfDestroy() external onlyOwner {
        selfdestruct(payable(owner()));
    }
}
