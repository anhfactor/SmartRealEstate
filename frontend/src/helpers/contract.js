import { ethers, Contract } from 'ethers'
import realEstate from '../contracts/RealEstateContract.json'
import contractAddress from '../contracts/contract-address.json'
import BigNumber from "bignumber.js";

export const getContract = (signer) => {
  return new Contract(
    contractAddress.Token, // contract address
    realEstate.abi,
    signer
  )
}

export const getAccount = async () => {

  if (!window.ethereum) {
    return {
      ready: false
    }
  }

  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const signer = provider.getSigner()

  const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })

  console.log(accounts)
  console.log("Current account:", await signer.getAddress())

  return { ready: true, provider, signer, accounts }
}


export const currentProspectNow = async () => {

  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)
  const price = await contract.prospectNowData();
  return price.toNumber();
}

export const currentZipState = async (address) => {

  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)
  const zipState = await contract.myMap(address);
  return zipState;
}

export const searchZipState = async(zipState) => {
  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)

  await contract.setZipState(zipState)
}

export const setRealEstate = async(name, image, description, location, price) => {
  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)

  await contract.setRealEstate(name, image, description, location, price)
}

export const getRealEstateLength = async () => {
  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)
  const length = await contract.realEstateLength();
  return length;
}

export const getAllRealEstate = async () => {
  const account = await getAccount()
  if (!account) throw new Error('Not ready')

  const { signer } = account
  const contract = await getContract(signer)
  const length = await getRealEstateLength();

  let realEstates = [];
  for (let i = 0; i < length; i++) {
    let realEstate = new Promise(async (resolve, reject) => {
      let p = await contract.methods.getRealEstate(i).call();
      resolve({
        index: i,
        owner: p[0],
        name: p[1],
        image: p[2],
        description: p[3],
        location: p[4],
        price: new BigNumber(p[6])
      });
    });
    realEstates.push(realEstate);
  }
  return realEstates;
}
