import { openWallet, signIn } from "@ramper/ethereum"

const handleWallet = () => {
  console.log("clicked wallet")
  signIn()
  openWallet
}

export { handleWallet }
