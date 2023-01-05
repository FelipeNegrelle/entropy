import { useState } from 'react'
import './Entropy.css'

function calculateEntropy(pwd) {
    const length = pwd.length
    const characterSet = new Set(pwd.split(''))
    const entropy = Math.round(Math.log2(characterSet.size) * length)
    if (entropy <= 64) {
        return(`${entropy} bits, you're weak af`)
    }
    else if(entropy <= 80) {
        return(`${entropy} bits, you're just weak`)
    }
    else if(entropy <= 112) {
        return(`${entropy} bits, you're fine with this`)
    }
    else if(entropy <= 128) {
        return(`${entropy} bits, that's strong`)
    }
    else if(entropy > 128) {
        return(`${entropy} bits, you're the stronger`)
    }
    else{
        return 'No password'
    }
}

export function Entropy() {
    const [password, setPassword] = useState('')
    const [entropy, setEntropy] = useState('No password')
    const [checked, setChecked] = useState(true)
    let [type, setType] = useState('password')

    function handlePasswordChange(event) {
        setPassword(event.target.value)
        setEntropy(calculateEntropy(event.target.value))
        console.log({password})
    }

    function handleCheckboxChange() {
        setChecked(!checked)
        console.log(checked)
        if(checked != true) setType('password'); else setType('text')
        console.log(type)
    }

    return (
        <>
            <body className="content">
                <header className="header">
                    <p className="header__title">Entropy Calculator</p>
                </header>

                <main className="main">
                    <span className="checkbox">
                        <input type="checkbox" onChange={handleCheckboxChange}/> 
                        <p>Show password</p>
                    </span>
                    <input name="password" type={type} value={password} className="main__input" onChange={handlePasswordChange} spellCheck="false"/>
                    <span className="entropy__value">{entropy}</span>
                </main>

                <p className='bottom-text'>Your passwords are never stored. Even if they were, we have no idea who you are!</p>

                <footer className="footer">
                    <p className="footer__title">Made with ♡ by <a target="_blank" className="link" href="https://github.com/felipenegrelle">Felipe</a></p>
                </footer>
            </body>
        </>
    )
}