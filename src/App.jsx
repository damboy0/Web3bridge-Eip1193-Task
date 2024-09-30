import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { WalletProvider } from "./context/WalletProvider";
import Wallet from './components/Wallet'

function App() {

  return (
    <>
    <WalletProvider>
      <Wallet />
    </WalletProvider>
    </>
  )
}

export default App
