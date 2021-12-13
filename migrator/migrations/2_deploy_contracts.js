const BonusToken = artifacts.require("BonusToken.sol");
const LiquidityMigrator = artifacts.require("LiquidityMigrator.sol");

module.exports = async function (deployer) {
  await deployer.deploy(BonusToken);
  const bonusToken = await BonusToken.deployed();

  const routerAddress = "0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D";
  const pairAddress = "";
  const routerForkAddress = "";
  const pairForkAddress = "";

  await deployer.deploy(
    LiquidityMigrator,
    routerAddress,
    pairAddress,
    routerForkAddress,
    pairForkAddress,
    bonusToken.address
  );

  const liquidityMigrator = await LiquidityMigrator.deployed();
  await bonusToken.setLiquidity(liquidityMigrator.address);
};
