// //have a function to enter the lottery
import { useMoralis, useWeb3Contract } from "react-moralis"
import { contractAddress, abi } from "../constants"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"

// export default function LotteryEntrance() {
//     const { chainId: chainIdHex } = useMoralis()
//     const chainId = parseInt(chainIdHex)
//     const raffleAddress = chainIdHex in contractAddress ? contractAddress[chainId][0] : null
//     // console.log(parseInt(chainId))
//     // const {runContractFunction: enterRaffle} = useWeb3Contract({
//     //     abi: abi, //,
//     //     contractAddress: raffleAddress, //,
//     //     functionName: "enterRaffle", //,
//     //     params: {},//,
//     //     msgValue: //
//     // })

//     // console.log(parseInt(chainId))
//     const {runContractFunction: getEntranceFee} = useWeb3Contract({
//         abi: abi, //,
//         contractAddress: raffleAddress, //,
//         functionName: "getEntranceFee", //,
//         params: {},//,
//     })

//     useEffect(() => {
//         if(isWeb3Enabled) {
//             async function updateUI() {
//                 const entranceFeeFromContract = await getEntranceFee()
//             }
//             updateUI()
//         }
//     }, [isWeb3Enabled])
//     return <div>Hi from lottery entrance!</div>
// }


// import { useMoralis, useWeb3Contract } from "react-moralis"
// import { contractAddress, abi } from "../constants"
// import { useEffect, useState } from "react"
// import { useNotification } from "web3uikit"

// export default function LotteryEntrance() {
//     const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()
//     const chainId = parseInt(chainIdHex)
//     const raffleAddress = chainIdHex in contractAddress ? contractAddress[chainId][0] : null

//     const [entranceFee, setEntranceFee] = useState("0")

//     const {runContractFunction: getEntranceFee} = useWeb3Contract({
//         abi: abi,
//         contractAddress: raffleAddress,
//         functionName: "getEntranceFee",
//         params: {},
//     })

//     useEffect(() => {
//         if(isWeb3Enabled) {
//             async function updateUI() {
//                 const entranceFeeFromCall = (await getEntranceFee().toString())
//                 setEntranceFee(entranceFeeFromCall)
//                 console.log(entranceFee)
//             }
//             updateUI()
//         }
//     }, [isWeb3Enabled])

//     return (
//         <div>
//             Hi from lottery! <div>{entranceFee}</div>
//         </div>
//     )
// }


async function updateUI() {
    try {
      const entranceFeeFromCall = await getEntranceFee();
      console.log("entranceFeeFromCall", entranceFeeFromCall);
      setEntranceFee(entranceFeeFromCall);
    } catch (error) {
      console.error(error);
    }
  }

