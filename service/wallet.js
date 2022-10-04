import { openWallet, signIn } from "@ramper/ethereum"

const handleWallet = () => {
  console.log("clicked wallet")
  signIn()
}

export { handleWallet }
