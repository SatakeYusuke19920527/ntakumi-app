import React, {useState} from 'react'

const Sensei = () => {
  const [te, setTe] = useState('')
  const gu = () => {
    setTe('ぐー')
  }
  const tyoki = () => {
    setTe('ちょき')
  }
  const pa = () => {
    setTe('ぱー')
  }
  return (
    <div>
      <button onClick={gu}>ぐー</button>
      <button onClick={tyoki}>ちょき</button>
      <button onClick={pa}>ぱー</button>
      <h1>あなたの手: {te}</h1>
    </div>
  )
}

export default Sensei
