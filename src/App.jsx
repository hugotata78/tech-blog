import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ContainerPostList } from './pages/ContainerPostList'
import { PostDetail } from './pages/PostDetail'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import { NavBar } from './components/NavBar'
import { LoginForm } from './components/LoginForm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <Provider store={store}>
      <BrowserRouter>
        <div className='container mx-auto'>
          <NavBar />
          <Routes>
            <Route path='/' element={<ContainerPostList />} />
            <Route path='/posts/:id' element={<PostDetail />} />
            <Route path='/login' element={<LoginForm />} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>

  )
}

export default App
