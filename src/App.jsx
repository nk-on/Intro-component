import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './components/Container/container'
import TextContainer from './components/Text/textContainer'
function App() {
  return <>
    <main className='w-full h-full flex gap-4 justify-center items-center flex-col md:flex-row '>
        <TextContainer />
        <Container />
    </main>
  </>
}

export default App
