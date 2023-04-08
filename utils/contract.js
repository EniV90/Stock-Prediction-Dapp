import { ethers } from 'ethers'
import StockBet from './StockPrediction.json'

// create a function that initializes the contract object
export async function createContractObject() {
  // get the provider and signer
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  // create the contract object using the ABI and contract address
  const contract = new ethers.Contract(
    "0x65D6b6833631297fcbF531ac98E4ADbe53C2aB48",
    StockBet.abi,
    signer
  );

  return contract
}
