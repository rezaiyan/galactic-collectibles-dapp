/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type {
  BaseContract,
  BaseContractInterface,
} from "../../contracts/BaseContract";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721IncorrectOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721InsufficientApproval",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "approver",
        type: "address",
      },
    ],
    name: "ERC721InvalidApprover",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "ERC721InvalidOperator",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "ERC721InvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "receiver",
        type: "address",
      },
    ],
    name: "ERC721InvalidReceiver",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "ERC721InvalidSender",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ERC721NonexistentToken",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "OwnableInvalidOwner",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Burned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Created",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId1",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId2",
        type: "uint256",
      },
    ],
    name: "Exchanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Sold",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "Transfered",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "UpforSale",
    type: "event",
  },
  {
    inputs: [],
    name: "_name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "_symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "selfDestroy",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "tokenIdToPlanetInfo",
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "terrain",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "rarityLevel",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "enum BaseContract.Status",
        name: "status",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "price",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040526040518060400160405280601481526020017f47616c6163746963436f6c6c65637469626c6573000000000000000000000000815250600790816200004a9190620005ba565b506040518060400160405280600381526020017f47414c000000000000000000000000000000000000000000000000000000000081525060089081620000919190620005ba565b503480156200009f57600080fd5b503360078054620000b090620003a9565b80601f0160208091040260200160405190810160405280929190818152602001828054620000de90620003a9565b80156200012f5780601f1062000103576101008083540402835291602001916200012f565b820191906000526020600020905b8154815290600101906020018083116200011157829003601f168201915b5050505050600880546200014390620003a9565b80601f01602080910402602001604051908101604052809291908181526020018280546200017190620003a9565b8015620001c25780601f106200019657610100808354040283529160200191620001c2565b820191906000526020600020905b815481529060010190602001808311620001a457829003601f168201915b50505050508160009081620001d89190620005ba565b508060019081620001ea9190620005ba565b505050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603620002625760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401620002599190620006e6565b60405180910390fd5b62000273816200027a60201b60201c565b5062000703565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680620003c257607f821691505b602082108103620003d857620003d76200037a565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004427fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000403565b6200044e868362000403565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200049b620004956200048f8462000466565b62000470565b62000466565b9050919050565b6000819050919050565b620004b7836200047a565b620004cf620004c682620004a2565b84845462000410565b825550505050565b600090565b620004e6620004d7565b620004f3818484620004ac565b505050565b5b818110156200051b576200050f600082620004dc565b600181019050620004f9565b5050565b601f8211156200056a576200053481620003de565b6200053f84620003f3565b810160208510156200054f578190505b620005676200055e85620003f3565b830182620004f8565b50505b505050565b600082821c905092915050565b60006200058f600019846008026200056f565b1980831691505092915050565b6000620005aa83836200057c565b9150826002028217905092915050565b620005c58262000340565b67ffffffffffffffff811115620005e157620005e06200034b565b5b620005ed8254620003a9565b620005fa8282856200051f565b600060209050601f8311600181146200063257600084156200061d578287015190505b6200062985826200059c565b86555062000699565b601f1984166200064286620003de565b60005b828110156200066c5784890151825560018201915060208501945060208101905062000645565b868310156200068c578489015162000688601f8916826200057c565b8355505b6001600288020188555050505b505050505050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620006ce82620006a1565b9050919050565b620006e081620006c1565b82525050565b6000602082019050620006fd6000830184620006d5565b92915050565b61262480620007136000396000f3fe608060405234801561001057600080fd5b50600436106101375760003560e01c8063715018a6116100b8578063b88d4fde1161007c578063b88d4fde1461033f578063b9750acf1461035b578063c87b56dd14610365578063d28d885214610395578063e985e9c5146103b3578063f2fde38b146103e357610137565b8063715018a6146102bf5780638da5cb5b146102c957806395d89b41146102e7578063a22cb46514610305578063b09f12661461032157610137565b806342842e0e116100ff57806342842e0e146101f257806342966c681461020e5780635426a7711461022a5780636352211e1461025f57806370a082311461028f57610137565b806301ffc9a71461013c57806306fdde031461016c578063081812fc1461018a578063095ea7b3146101ba57806323b872dd146101d6575b600080fd5b61015660048036038101906101519190611cf6565b6103ff565b6040516101639190611d3e565b60405180910390f35b6101746104e1565b6040516101819190611de9565b60405180910390f35b6101a4600480360381019061019f9190611e41565b610573565b6040516101b19190611eaf565b60405180910390f35b6101d460048036038101906101cf9190611ef6565b61058f565b005b6101f060048036038101906101eb9190611f36565b6105a5565b005b61020c60048036038101906102079190611f36565b6106a7565b005b61022860048036038101906102239190611e41565b6106c7565b005b610244600480360381019061023f9190611e41565b610803565b6040516102569695949392919061200f565b60405180910390f35b61027960048036038101906102749190611e41565b61097c565b6040516102869190611eaf565b60405180910390f35b6102a960048036038101906102a4919061207e565b61098e565b6040516102b691906120ab565b60405180910390f35b6102c7610a48565b005b6102d1610a5c565b6040516102de9190611eaf565b60405180910390f35b6102ef610a86565b6040516102fc9190611de9565b60405180910390f35b61031f600480360381019061031a91906120f2565b610b18565b005b610329610b2e565b6040516103369190611de9565b60405180910390f35b61035960048036038101906103549190612267565b610bbc565b005b610363610bd9565b005b61037f600480360381019061037a9190611e41565b610c01565b60405161038c9190611de9565b60405180910390f35b61039d610c6a565b6040516103aa9190611de9565b60405180910390f35b6103cd60048036038101906103c891906122ea565b610cf8565b6040516103da9190611d3e565b60405180910390f35b6103fd60048036038101906103f8919061207e565b610d8c565b005b60007f80ac58cd000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff191614806104ca57507f5b5e139f000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916145b806104da57506104d982610e12565b5b9050919050565b6060600080546104f090612359565b80601f016020809104026020016040519081016040528092919081815260200182805461051c90612359565b80156105695780601f1061053e57610100808354040283529160200191610569565b820191906000526020600020905b81548152906001019060200180831161054c57829003601f168201915b5050505050905090565b600061057e82610e7c565b5061058882610f04565b9050919050565b6105a1828261059c610f41565b610f49565b5050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036106175760006040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161060e9190611eaf565b60405180910390fd5b600061062b8383610626610f41565b610f5b565b90508373ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16146106a1578382826040517f64283d7b0000000000000000000000000000000000000000000000000000000081526004016106989392919061238a565b60405180910390fd5b50505050565b6106c283838360405180602001604052806000815250610bbc565b505050565b803373ffffffffffffffffffffffffffffffffffffffff166106e88261097c565b73ffffffffffffffffffffffffffffffffffffffff161461073e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161073590612433565b60405180910390fd5b61074782611175565b600a60008381526020019081526020016000206000808201600061076b9190611c2d565b60018201600061077b9190611c2d565b60028201600090556003820160006101000a81549073ffffffffffffffffffffffffffffffffffffffff02191690556003820160146101000a81549060ff0219169055600482016000905550507fd83c63197e8e676d80ab0122beba9a9d20f3828839e9a1d6fe81d242e9cd7e6e826040516107f791906120ab565b60405180910390a15050565b600a60205280600052604060002060009150905080600001805461082690612359565b80601f016020809104026020016040519081016040528092919081815260200182805461085290612359565b801561089f5780601f106108745761010080835404028352916020019161089f565b820191906000526020600020905b81548152906001019060200180831161088257829003601f168201915b5050505050908060010180546108b490612359565b80601f01602080910402602001604051908101604052809291908181526020018280546108e090612359565b801561092d5780601f106109025761010080835404028352916020019161092d565b820191906000526020600020905b81548152906001019060200180831161091057829003601f168201915b5050505050908060020154908060030160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060030160149054906101000a900460ff16908060040154905086565b600061098782610e7c565b9050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603610a015760006040517f89c62b640000000000000000000000000000000000000000000000000000000081526004016109f89190611eaf565b60405180910390fd5b600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b610a506111fb565b610a5a6000611282565b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b606060018054610a9590612359565b80601f0160208091040260200160405190810160405280929190818152602001828054610ac190612359565b8015610b0e5780601f10610ae357610100808354040283529160200191610b0e565b820191906000526020600020905b815481529060010190602001808311610af157829003601f168201915b5050505050905090565b610b2a610b23610f41565b8383611348565b5050565b60088054610b3b90612359565b80601f0160208091040260200160405190810160405280929190818152602001828054610b6790612359565b8015610bb45780601f10610b8957610100808354040283529160200191610bb4565b820191906000526020600020905b815481529060010190602001808311610b9757829003601f168201915b505050505081565b610bc78484846105a5565b610bd3848484846114b7565b50505050565b610be16111fb565b610be9610a5c565b73ffffffffffffffffffffffffffffffffffffffff16ff5b6060610c0c82610e7c565b506000610c1761166e565b90506000815111610c375760405180602001604052806000815250610c62565b80610c4184611685565b604051602001610c5292919061248f565b6040516020818303038152906040525b915050919050565b60078054610c7790612359565b80601f0160208091040260200160405190810160405280929190818152602001828054610ca390612359565b8015610cf05780601f10610cc557610100808354040283529160200191610cf0565b820191906000526020600020905b815481529060010190602001808311610cd357829003601f168201915b505050505081565b6000600560008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b610d946111fb565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610e065760006040517f1e4fbdf7000000000000000000000000000000000000000000000000000000008152600401610dfd9190611eaf565b60405180910390fd5b610e0f81611282565b50565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600080610e8883611753565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1603610efb57826040517f7e273289000000000000000000000000000000000000000000000000000000008152600401610ef291906120ab565b60405180910390fd5b80915050919050565b60006004600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b600033905090565b610f568383836001611790565b505050565b600080610f6784611753565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614610fa957610fa8818486611955565b5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461103a57610feb600085600080611790565b6001600360008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825403925050819055505b600073ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff16146110bd576001600360008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055505b846002600086815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4809150509392505050565b60006111846000836000610f5b565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036111f757816040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016111ee91906120ab565b60405180910390fd5b5050565b611203610f41565b73ffffffffffffffffffffffffffffffffffffffff16611221610a5c565b73ffffffffffffffffffffffffffffffffffffffff161461128057611244610f41565b6040517f118cdaa70000000000000000000000000000000000000000000000000000000081526004016112779190611eaf565b60405180910390fd5b565b6000600660009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905081600660006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036113b957816040517f5b08ba180000000000000000000000000000000000000000000000000000000081526004016113b09190611eaf565b60405180910390fd5b80600560008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff0219169083151502179055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31836040516114aa9190611d3e565b60405180910390a3505050565b60008373ffffffffffffffffffffffffffffffffffffffff163b1115611668578273ffffffffffffffffffffffffffffffffffffffff1663150b7a026114fb610f41565b8685856040518563ffffffff1660e01b815260040161151d9493929190612508565b6020604051808303816000875af192505050801561155957506040513d601f19601f820116820180604052508101906115569190612569565b60015b6115dd573d8060008114611589576040519150601f19603f3d011682016040523d82523d6000602084013e61158e565b606091505b5060008151036115d557836040517f64a0ae920000000000000000000000000000000000000000000000000000000081526004016115cc9190611eaf565b60405180910390fd5b805181602001fd5b63150b7a0260e01b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161461166657836040517f64a0ae9200000000000000000000000000000000000000000000000000000000815260040161165d9190611eaf565b60405180910390fd5b505b50505050565b606060405180602001604052806000815250905090565b60606000600161169484611a19565b01905060008167ffffffffffffffff8111156116b3576116b261213c565b5b6040519080825280601f01601f1916602001820160405280156116e55781602001600182028036833780820191505090505b509050600082602001820190505b600115611748578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a858161173c5761173b612596565b5b049450600085036116f3575b819350505050919050565b60006002600083815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b80806117c95750600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614155b156118fd5760006117d984610e7c565b9050600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415801561184457508273ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614155b801561185757506118558184610cf8565b155b1561189957826040517fa9fbf51f0000000000000000000000000000000000000000000000000000000081526004016118909190611eaf565b60405180910390fd5b81156118fb57838573ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45b505b836004600085815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050505050565b611960838383611b6c565b611a1457600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16036119d557806040517f7e2732890000000000000000000000000000000000000000000000000000000081526004016119cc91906120ab565b60405180910390fd5b81816040517f177e802f000000000000000000000000000000000000000000000000000000008152600401611a0b9291906125c5565b60405180910390fd5b505050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310611a77577a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008381611a6d57611a6c612596565b5b0492506040810190505b6d04ee2d6d415b85acef81000000008310611ab4576d04ee2d6d415b85acef81000000008381611aaa57611aa9612596565b5b0492506020810190505b662386f26fc100008310611ae357662386f26fc100008381611ad957611ad8612596565b5b0492506010810190505b6305f5e1008310611b0c576305f5e1008381611b0257611b01612596565b5b0492506008810190505b6127108310611b31576127108381611b2757611b26612596565b5b0492506004810190505b60648310611b545760648381611b4a57611b49612596565b5b0492506002810190505b600a8310611b63576001810190505b80915050919050565b60008073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1614158015611c2457508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff161480611be55750611be48484610cf8565b5b80611c2357508273ffffffffffffffffffffffffffffffffffffffff16611c0b83610f04565b73ffffffffffffffffffffffffffffffffffffffff16145b5b90509392505050565b508054611c3990612359565b6000825580601f10611c4b5750611c6a565b601f016020900490600052602060002090810190611c699190611c6d565b5b50565b5b80821115611c86576000816000905550600101611c6e565b5090565b6000604051905090565b600080fd5b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b611cd381611c9e565b8114611cde57600080fd5b50565b600081359050611cf081611cca565b92915050565b600060208284031215611d0c57611d0b611c94565b5b6000611d1a84828501611ce1565b91505092915050565b60008115159050919050565b611d3881611d23565b82525050565b6000602082019050611d536000830184611d2f565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611d93578082015181840152602081019050611d78565b60008484015250505050565b6000601f19601f8301169050919050565b6000611dbb82611d59565b611dc58185611d64565b9350611dd5818560208601611d75565b611dde81611d9f565b840191505092915050565b60006020820190508181036000830152611e038184611db0565b905092915050565b6000819050919050565b611e1e81611e0b565b8114611e2957600080fd5b50565b600081359050611e3b81611e15565b92915050565b600060208284031215611e5757611e56611c94565b5b6000611e6584828501611e2c565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000611e9982611e6e565b9050919050565b611ea981611e8e565b82525050565b6000602082019050611ec46000830184611ea0565b92915050565b611ed381611e8e565b8114611ede57600080fd5b50565b600081359050611ef081611eca565b92915050565b60008060408385031215611f0d57611f0c611c94565b5b6000611f1b85828601611ee1565b9250506020611f2c85828601611e2c565b9150509250929050565b600080600060608486031215611f4f57611f4e611c94565b5b6000611f5d86828701611ee1565b9350506020611f6e86828701611ee1565b9250506040611f7f86828701611e2c565b9150509250925092565b611f9281611e0b565b82525050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b60028110611fd857611fd7611f98565b5b50565b6000819050611fe982611fc7565b919050565b6000611ff982611fdb565b9050919050565b61200981611fee565b82525050565b600060c08201905081810360008301526120298189611db0565b9050818103602083015261203d8188611db0565b905061204c6040830187611f89565b6120596060830186611ea0565b6120666080830185612000565b61207360a0830184611f89565b979650505050505050565b60006020828403121561209457612093611c94565b5b60006120a284828501611ee1565b91505092915050565b60006020820190506120c06000830184611f89565b92915050565b6120cf81611d23565b81146120da57600080fd5b50565b6000813590506120ec816120c6565b92915050565b6000806040838503121561210957612108611c94565b5b600061211785828601611ee1565b9250506020612128858286016120dd565b9150509250929050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b61217482611d9f565b810181811067ffffffffffffffff821117156121935761219261213c565b5b80604052505050565b60006121a6611c8a565b90506121b2828261216b565b919050565b600067ffffffffffffffff8211156121d2576121d161213c565b5b6121db82611d9f565b9050602081019050919050565b82818337600083830152505050565b600061220a612205846121b7565b61219c565b90508281526020810184848401111561222657612225612137565b5b6122318482856121e8565b509392505050565b600082601f83011261224e5761224d612132565b5b813561225e8482602086016121f7565b91505092915050565b6000806000806080858703121561228157612280611c94565b5b600061228f87828801611ee1565b94505060206122a087828801611ee1565b93505060406122b187828801611e2c565b925050606085013567ffffffffffffffff8111156122d2576122d1611c99565b5b6122de87828801612239565b91505092959194509250565b6000806040838503121561230157612300611c94565b5b600061230f85828601611ee1565b925050602061232085828601611ee1565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061237157607f821691505b6020821081036123845761238361232a565b5b50919050565b600060608201905061239f6000830186611ea0565b6123ac6020830185611f89565b6123b96040830184611ea0565b949350505050565b7f596f752063616e27742073656c6c206120706c616e657420796f7520646f6e2760008201527f74206f776e000000000000000000000000000000000000000000000000000000602082015250565b600061241d602583611d64565b9150612428826123c1565b604082019050919050565b6000602082019050818103600083015261244c81612410565b9050919050565b600081905092915050565b600061246982611d59565b6124738185612453565b9350612483818560208601611d75565b80840191505092915050565b600061249b828561245e565b91506124a7828461245e565b91508190509392505050565b600081519050919050565b600082825260208201905092915050565b60006124da826124b3565b6124e481856124be565b93506124f4818560208601611d75565b6124fd81611d9f565b840191505092915050565b600060808201905061251d6000830187611ea0565b61252a6020830186611ea0565b6125376040830185611f89565b818103606083015261254981846124cf565b905095945050505050565b60008151905061256381611cca565b92915050565b60006020828403121561257f5761257e611c94565b5b600061258d84828501612554565b91505092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b60006040820190506125da6000830185611ea0565b6125e76020830184611f89565b939250505056fea26469706673582212204193666e82a2ce593e1bcffe67e06ae547506fe024574765f8d934c877be911c64736f6c63430008140033";

type BaseContractConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BaseContractConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BaseContract__factory extends ContractFactory {
  constructor(...args: BaseContractConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      BaseContract & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): BaseContract__factory {
    return super.connect(runner) as BaseContract__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BaseContractInterface {
    return new Interface(_abi) as BaseContractInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): BaseContract {
    return new Contract(address, _abi, runner) as unknown as BaseContract;
  }
}