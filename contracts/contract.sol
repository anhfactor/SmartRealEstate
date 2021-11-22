// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@chainlink/contracts/src/v0.8/ChainlinkClient.sol";

contract RealEstateDataConsumer is ChainlinkClient {
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
    
    function requestDataProspectNow(string memory _propertyZip) public returns (bytes32 requestId) {
        Chainlink.Request memory req = buildChainlinkRequest(jobId, address(this), this.fulfillProspectNow.selector);
        req.add("propertyZip", _propertyZip);
        uint256 fee = 0.1 * 10 ** 18; // 0.1 LINK
        return sendChainlinkRequestTo(oracle, req, fee);
    }

    uint256 public prospectNowData;

    function fulfillProspectNow(bytes32 _requestId, uint256 _data) public recordChainlinkFulfillment(_requestId) {
        prospectNowData = _data;
    }
}
