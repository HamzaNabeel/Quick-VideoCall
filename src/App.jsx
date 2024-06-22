import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage'
import VideoPage from './components/VideoPage'

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path: "/room/:id",
      element:<VideoPage/>
    }
  ])

  return (

    <div className='App'>
      <h1>Quick VideoCall</h1>
      
      <div className='newApp'>
      <RouterProvider router = {router}/>
      </div>
    </div>
  )
}

export default App
