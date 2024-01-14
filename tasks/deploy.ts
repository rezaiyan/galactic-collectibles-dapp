import { task } from 'hardhat/config';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

task('deploy', 'Deploy GalacticCollectibles contract to the local network').setAction(
  async (_, hre: HardhatRuntimeEnvironment): Promise<void> => {
    const GalacticCollectibles = await hre.ethers.getContractFactory('GalacticCollectibles');
    const galacticCollectibles = await GalacticCollectibles.deploy();

    await galacticCollectibles.deployed();

    console.log('GalacticCollectibles deployed to:', galacticCollectibles.address);
  }
);