// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract RealEstateContract is ChainlinkClient {
    using Chainlink for Chainlink.Request;

    address private oracle;
    bytes32 private jobId;
    uint256 private fee;

    /**
     * Network: Kovan - https://market.link/data-providers/c8fc4b66-66a5-4e24-8d11-85d19553c03c/integrations
     * Chainlink oracle - 0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd
     * Chainlink jobId - c9df8b4e40a44927aa6e839a3af82ce9
     * Fee: 0.1 LINK
     */
    constructor() public {
        setPublicChainlinkToken();
        oracle = 0xfF07C97631Ff3bAb5e5e5660Cdf47AdEd8D4d4Fd;
        jobId = "c9df8b4e40a44927aa6e839a3af82ce9";
        fee = 0.1 * 10 ** 18; // 0.1 LINK
    }

    // Mapping from address to uint
    mapping(address => string) public myMap;

     // map real estate struck to an integer
    mapping (uint => RealEstate) internal realEstates;

    // struct containing real estate
    struct RealEstate {
        address payable owner;
        string name;
        string image;
        string description;
        string location;
        uint price;
    }
    uint internal realEstateLength = 0;

    // save a particular real estate to the blockchain
    function setRealEstate(
        string memory _name,
        string memory _image,
        string memory _description, 
        string memory _location,
        uint _price
    ) public {
        require(_price > 0, "Please enter a valid price");
        realEstates[realEstateLength] = RealEstate(
            payable(msg.sender),
            _name,
            _image,
            _description,
            _location,
            _price
        );
        realEstateLength++;
    }

    // get a particular real estate
    function getRealEstate(uint _index) public view returns (
        address payable,
        string memory, 
        string memory, 
        string memory, 
        string memory,
        uint
    ) {
        RealEstate storage realEstate = realEstates[_index];
        return (
            realEstate.owner,
            realEstate.name, 
            realEstate.image, 
            realEstate.description, 
            realEstate.location, 
            realEstate.price
        );
    }

    // Get the price when input state
    function setZipState(string memory _propertyZip) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillProspectNow.selector);
        req.add("propertyZip", _propertyZip);
        // Update the value at this address
        address _addr = msg.sender;
        myMap[_addr] = _propertyZip;
        return sendChainlinkRequestTo(oracle, req, fee);
    }

    function remove(address _addr) public {
        // Reset the value to the default value.
        delete myMap[_addr];
    }

    uint256 public prospectNowData;

    function fulfillProspectNow(bytes32 _requestId, uint256 _data) public recordChainlinkFulfillment(_requestId) {
        prospectNowData = _data;
    }
}