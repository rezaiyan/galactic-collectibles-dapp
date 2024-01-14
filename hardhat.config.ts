import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
import 'dotenv/config';
import '@typechain/hardhat';
import 'solidity-coverage';
import * as dotenv from 'dotenv';
import './tasks/deploy';

dotenv.config();

const infuraKey = process.env.INFURA_PROJECT_ID || '';
const mnemonic = process.env.MNEMONIC || '';

const config: HardhatUserConfig = {
  solidity: '0.8.20',
  paths: {
    artifacts: './frontend/src/artifacts'
  },
  networks: {
    hardhat: {
      mining: {
        auto: false,
        interval: 1000
      }
    },
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: {
        mnemonic: mnemonic,
      },
      chainId: 11155111, // Sepolia's network ID
      gas: 4000000, // Adjust the gas limit as per your requirements
      gasPrice: 10000000000, // Set the gas price to an appropriate value
    }
  },
  // Uncomment the following sections if you want to use them
  // gasReporter: {
  //   enabled: process.env.REPORT_GAS !== undefined,
  //   currency: 'USD'
  // },
  // etherscan: {
  //   apiKey: process.env.ETHERSCAN_API_KEY
  // }
};

export default config;
