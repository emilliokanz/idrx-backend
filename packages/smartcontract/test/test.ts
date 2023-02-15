import { expect } from "chai";
import { ethers, upgrades } from "hardhat";

describe("NusaStableToken", function () {
  it("Test contract", async function () {
    const ContractFactory = await ethers.getContractFactory("NusaStableToken");

    const instance = await upgrades.deployProxy(ContractFactory);
    await instance.deployed();

    expect(await instance.name()).to.equal("Nusa Stable Token");
  });
});
