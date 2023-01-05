import { useState } from 'react'
import './App.css'
import { Entropy } from './entropy'

export function App(){
  return (
    <div className="App">
      <Entropy/>
    </div>
  )
}



//Password Entropy = log_{2}  (number of characters in character set) * length of the password