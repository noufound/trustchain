export const TokenVestingFactoryABI =  [
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "initialOwner",
          "type": "address"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "OwnableInvalidOwner",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "OwnableUnauthorizedAccount",
      "type": "error"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "SafeERC20FailedOperation",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "beneficiaryVestingContracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_token",
          "type": "address"
        },
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_cliff",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_start",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_duration",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_slicePeriodSeconds",
          "type": "uint256"
        },
        {
          "components": [
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "address",
              "name": "account",
              "type": "address"
            },
            {
              "internalType": "uint256",
              "name": "amount",
              "type": "uint256"
            }
          ],
          "internalType": "struct ITokenVesting.BeneficiaryBaseInfo[]",
          "name": "_beneficiarys",
          "type": "tuple[]"
        }
      ],
      "name": "createVesting",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserAllVestingBeneficiarys",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingScheduleId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "cliff",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "duration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "slicePeriodSeconds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "extractedTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestedTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "state",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ITokenVesting.TokenVestingBaseInfo",
              "name": "baseInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "extracted",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "revoked",
                  "type": "bool"
                }
              ],
              "internalType": "struct ITokenVesting.BeneficiaryInfo",
              "name": "beneficiaryInfo",
              "type": "tuple"
            },
            {
              "internalType": "uint256",
              "name": "vested",
              "type": "uint256"
            }
          ],
          "internalType": "struct ITokenVesting.VestingBeneficiaryInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "user",
          "type": "address"
        }
      ],
      "name": "getUserAllVestingCreated",
      "outputs": [
        {
          "components": [
            {
              "components": [
                {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
                },
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "uint256",
                  "name": "vestingScheduleId",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "start",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "cliff",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "duration",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "slicePeriodSeconds",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "amountTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "extractedTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "vestedTotal",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "state",
                  "type": "uint256"
                }
              ],
              "internalType": "struct ITokenVesting.TokenVestingBaseInfo",
              "name": "baseInfo",
              "type": "tuple"
            },
            {
              "components": [
                {
                  "internalType": "string",
                  "name": "name",
                  "type": "string"
                },
                {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
                },
                {
                  "internalType": "uint256",
                  "name": "amount",
                  "type": "uint256"
                },
                {
                  "internalType": "uint256",
                  "name": "extracted",
                  "type": "uint256"
                },
                {
                  "internalType": "bool",
                  "name": "revoked",
                  "type": "bool"
                }
              ],
              "internalType": "struct ITokenVesting.BeneficiaryInfo[]",
              "name": "beneficiaries",
              "type": "tuple[]"
            }
          ],
          "internalType": "struct ITokenVesting.TokenVestingInfo[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "userVestingContracts",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "vestingContractCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]