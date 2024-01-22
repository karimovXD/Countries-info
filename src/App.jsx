import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'

//pages
import Africa from './pages/Africa'
import America from './pages/America'
import Asia from './pages/Asia'
import Europe from './pages/Europe'
import All from './pages/All'


function App() {
  const [count, setCount] = useState(0)

  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<All />} />
        <Route path='/America' element={<America />} />
        <Route path='/Africa' element={<Africa />} />
        <Route path='/Asia' element={<Asia />} />
        <Route path='/Europe' element={<Europe />} />
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={routes} />
    </>
  )
}

export default App
