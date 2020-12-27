import React, {useState, useEffect} from 'react'

const Sensei = () => {
  const [te, setTe] = useState('')
  const [cpuTe, setCpuTe] = useState('')
  
  useEffect(() => {
    const random = Math.floor(Math.random() * 3)
    console.log(random, 'random')
    if (random === 0) {
      setCpuTe("ぐー")  
    } else if (random === 1) {
      setCpuTe("ちょき")
    }else if (random === 2) {
      setCpuTe("ぱー")
    } else {
      window.alert('error')
    }
  }, [te])

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
      <h1>CPUの手: {cpuTe}</h1>
    </div>
  )
}

export default Sensei
