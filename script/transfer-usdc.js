const web3 = new Web3('https://ropsten.infura.io/v3/e62a60a251c64745baefeaf8237af646')

async function transferUsdc(token) {
  let amountEntered = parseInt(document.getElementById("amount").value);
  let floorPrice = 0.1;
  let amount = amountEntered * floorPrice;

  await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  // let userBalance = ethers.utils.formatEther(await provider.getBalance());

  console.log(amount);
  
  ethacc = await window.ethereum.request({ method: "eth_accounts" }); 
  let userAddress = ethacc[0];
  console.log("etacc: ", ethacc[0]);
  let userBalance = ethers.utils.formatEther(await provider.getBalance(userAddress));
  console.log(userBalance);
  
  

  // if (balance.lt(amount)) {
  //   let amountFormatted = ethers.utils.formatUnits(amount, 6);
  //   let balanceFormatted = ethers.utils.formatUnits(balance, 6);
  //   console.error(
  //     `Insufficient balance receiver send ${amountFormatted} (You have ${balanceFormatted})`
  //   );

  //   response = `Insufficient balance receiver send ${amountFormatted} (You have ${balanceFormatted})`;
  //   document.getElementById("transferResponse").innerText = response;
  //   document.getElementById("transferResponse").style.display = "block";
  // }
  // let amountFormatted = ethers.utils.formatUnits(amount, 6);

  // console.log(`Transferring ${amountFormatted} USDC receiver ${receiver}...`);

  // response = `Transferring ${amountFormatted} USDC receiver ${receiver.slice(
  //   0,
  //   6
  // )}...`;
  // document.getElementById("transferResponse").innerText = response;
  // document.getElementById("transferResponse").style.display = "block";


const txObject = {
  from: ethereum.selectedAddress,
    to: "0x798ebe32DedcE80Dd7D30Fd77F5087E8Cf33e54B",
    value: ethers.utils.hexlify(ethers.utils.parseUnits('0.01', 'ether')),
    nonce: ethers.utils.hexlify(await provider.getTransactionCount(ethereum.selectedAddress, "latest" )),
    gasLimit: ethers.utils.hexlify(10000),
    gasPrice: ethers.utils.hexlify(parseInt(await provider.getGasPrice())),
}
const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [txObject]
});

console.log(`Transaction hash: ${txHash}`);
document.getElementById(
 "transferResponse"
).innerText += `Transaction hash: ${txHash}`;
}