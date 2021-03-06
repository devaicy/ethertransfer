const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

const usdc = {
  address: "0x68ec573C119826db2eaEA1Efbfc2970cDaC869c4",
  abi: [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function gimmeSome() external",
    "function balanceOf(address _owner) public view returns (uint256 balance)",
    "function transfer(address _to, uint256 _value) public returns (bool success)",
  ],
};


async function main() {
  /*=======
    CONNECT TO METAMASK
    =======*/
  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  let userAddress = await signer.getAddress();
}
main();
