// //have a function to enter the lottery
// import { useMoralis, useWeb3Contract } from "react-moralis"
// import { contractAddress, abi } from "../constants"
// import { useEffect, useState } from "react"
// import { useNotification } from "web3uikit"

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


// import { useMoralis, useWeb3Contract } from "react-moralis"
// import { contractAddress, abi } from "../constants"
// import { useEffect, useState } from "react"
// import { useNotification } from "web3uikit"

// export default function LotteryEntrance() {
//     const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()
//     const chainId = parseInt(chainIdHex)
//     const raffleAddress = chainIdHex in contractAddress ? contractAddress[chainId][0] : null

//     const [entranceFee, setEntranceFee] = useState(null)

//     const {runContractFunction: getEntranceFee} = useWeb3Contract({
//         abi: abi,
//         contractAddress: raffleAddress,
//         functionName: "getEntranceFee",
//         params: {},
//     })

//     useEffect(() => {
//         if (isWeb3Enabled) {
//           async function updateUI() {
//             const entranceFeeFromCall = await getEntranceFee()
//             console.log('entranceFeeFromCall:', entranceFeeFromCall)
//             setEntranceFee(entranceFeeFromCall.toString())
//           }
//           updateUI()
//         }
//       }, [isWeb3Enabled])

//     return (
//         <div>
//             {entranceFee === null ? "Loading entrance fee..." : `Entrance fee: ${entranceFee}`}
//         </div>
//     )
// }



import { useMoralis, useWeb3Contract } from "react-moralis"
import { contractAddress, abi } from "../constants"
import { useEffect, useState } from "react"
import { useNotification } from "web3uikit"

export default function LotteryEntrance() {
    const { isWeb3Enabled, chainId: chainIdHex } = useMoralis()
    const chainId = parseInt(chainIdHex)
    // console.log(`ChainId is ${chainId}`)
    
    const raffleAddress = chainIdHex in contractAddress ? contractAddress[chainId][0] : null

    const [entranceFee, setEntranceFee] = useState("0")

    const {runContractFunction: getEntranceFee} = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    async function updateUIValues() {
        // Another way we could make a contract call:
        // const options = { abi, contractAddress: raffleAddress }
        // const fee = await Moralis.executeFunction({
        //     functionName: "getEntranceFee",
        //     ...options,
        // })
        const entranceFee = await getEntranceFee();
        console.log(`entranceFee is  ${entranceFee}`);
        if (entranceFee !== undefined && entranceFee !== null) {
            const entranceFee = await getEntranceFee();
        const entranceFeeString = entranceFee.toString();
  // Use entranceFeeString as needed
        } else {
  // Handle the case where entranceFee is undefined or null
        }
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUIValues()
        }
    }, [isWeb3Enabled])

    return (
        <div className="p-5">
            <h1 className="py-4 px-4 font-bold text-3xl">Lottery</h1>
            {raffleAddress ? (
                <>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-auto"
                        onClick={async () =>
                            await enterRaffle({
                                // onComplete:
                                // onError:
                                onSuccess: handleSuccess,
                                onError: (error) => console.log(error),
                            })
                        }
                        disabled={isLoading || isFetching}
                    >
                        {isLoading || isFetching ? (
                            <div className="animate-spin spinner-border h-8 w-8 border-b-2 rounded-full"></div>
                        ) : (
                            "Enter Raffle"
                        )}
                    </button>
                    <div>Entrance Fee: {ethers.utils.formatUnits(entranceFee, "ether")} ETH</div>
                    <div>The current number of players is: {numberOfPlayers}</div>
                    <div>The most previous winner was: {recentWinner}</div>
                </>
            ) : (
                <div>Please connect to a supported chain </div>
            )}
        </div>
    )
}



