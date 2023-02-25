import{ConnectButton} from "web3uikit"

export default function Header() {
    return (<div>
        Lottery System
        <ConnectButton moralisAuth={false} />
    </div>)
}