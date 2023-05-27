import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { ContainerPostList } from './pages/ContainerPostList'
import { PostDetail } from './pages/PostDetail'
import { DataProvider } from './context/DataProvider'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {
  const [count, setCount] = useState(0)

  return (

      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<ContainerPostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    
  )
}

export default App
