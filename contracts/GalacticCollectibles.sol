//SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

import "./BaseContract.sol";

contract GalacticCollectibles is BaseContract {
    uint256[] private allPlanetIds;

    function createPlanet(
        string memory _planetName,
        string memory _terrain,
        uint256 _rarityLevel,
        uint256 _tokenId
    ) public noReentrancy {
        Planet memory newPlanet = Planet(
            _planetName,
            _terrain,
            _rarityLevel,
            msg.sender,
            Status.New,
            0
        );
        tokenIdToPlanetInfo[_tokenId] = newPlanet;
        allPlanetIds.push(_tokenId);
        _mint(msg.sender, _tokenId);
        emit Created(_tokenId);
    }

    function putPlanetUpForSale(
        uint256 _tokenId,
        uint256 _price
    ) public noReentrancy isOwner(_tokenId) {
        tokenIdToPlanetInfo[_tokenId].price = _price;
        tokenIdToPlanetInfo[_tokenId].status = Status.ForSale;
        emit UpforSale(_tokenId);
    }

    function buyPlanet(
        uint256 _tokenId
    ) public payable noReentrancy isForSale(_tokenId) hasEnoughFund(_tokenId) {
        uint256 planetCost = tokenIdToPlanetInfo[_tokenId].price;
        address ownerAddress = ownerOf(_tokenId);

        _transfer(ownerAddress, msg.sender, _tokenId);

        address payable ownerAddressPayable = payable(ownerAddress);
        ownerAddressPayable.transfer(planetCost);

        if (msg.value > planetCost) {
            payable(msg.sender).transfer(msg.value - planetCost);
        }

        tokenIdToPlanetInfo[_tokenId].owner = msg.sender;
        tokenIdToPlanetInfo[_tokenId].status = Status.New;
        tokenIdToPlanetInfo[_tokenId].price = 0;
        emit Sold(_tokenId);
    }

    function lookUpTokenIdToPlanetInfo(
        uint256 _tokenId
    ) public view returns (string memory, string memory, uint256) {
        Planet memory planet = tokenIdToPlanetInfo[_tokenId];
        return (planet.name, planet.terrain, planet.rarityLevel);
    }

    function exchangePlanets(
        uint256 _tokenId1,
        uint256 _tokenId2
    )
        public
        noReentrancy
        isOwnerOfEither(ownerOf(_tokenId1), ownerOf(_tokenId2))
    {
        address owner1 = ownerOf(_tokenId1);
        address owner2 = ownerOf(_tokenId2);

        _transfer(owner1, owner2, _tokenId1);
        _transfer(owner2, owner1, _tokenId2);
        emit Exchanged(_tokenId1, _tokenId2);
    }

    function transferPlanet(
        address _to,
        uint256 _tokenId
    ) public noReentrancy isOwner(_tokenId) {
        _transfer(msg.sender, _to, _tokenId);
        emit Transfered(_tokenId);
    }

    function getAllPlanets() public view returns (Planet[] memory) {
        uint256 totalPlanets = allPlanetIds.length;
        Planet[] memory allPlanets = new Planet[](totalPlanets);

        for (uint256 i = 0; i < totalPlanets; i++) {
            uint256 tokenId = allPlanetIds[i];
            allPlanets[i] = tokenIdToPlanetInfo[tokenId];
        }

        return allPlanets;
    }
}
