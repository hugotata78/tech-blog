import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { PostList } from './pages/PostList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <PostList/>
      </div>
    </>
  )
}

export default App
