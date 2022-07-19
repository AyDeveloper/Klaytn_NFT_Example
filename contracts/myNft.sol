// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@klaytn/contracts/KIP/token/KIP17/extensions/KIP17URIStorage.sol";
import "@klaytn/contracts/utils/Counters.sol";


contract MYNFT is KIP17URIStorage {

      using Counters for Counters.Counter;

      Counters.Counter private currentTokenId;

    // /// @dev Base token URI used as a prefix by tokenURI().
    // string public baseTokenURI;

    constructor() KIP17("MYNFT", "MNFT") {}


      function mintNftTo(address recipient, string memory tokenURI)
        public 
        returns (uint256)
    {
        currentTokenId.increment();

        uint256 newItemId = currentTokenId.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }
}