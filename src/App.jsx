import { useState } from 'react'
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layout/RootLayout'
import { SearchContext, FilterContext } from './context/MyContext'


//pages
import About from './pages/About'
import Error from './pages/Error'
import All from './pages/All'


function App() {
  //contextState
  const [searchAll, setSearchAll] = useState('')
  const [filterV, setFilterV] = useState('')

  //route
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<RootLayout />}>
        <Route path='/' element={<All />} />
        <Route path='/About' element={<About />} />
        <Route path='/Error' element={<Error />} />
      </Route>
    )
  )

  //render
  return (
    <SearchContext.Provider value={{ searchAll, setSearchAll }}>
      <FilterContext.Provider value={{ filterV, setFilterV }}>
        <RouterProvider router={routes} />
      </FilterContext.Provider>
    </SearchContext.Provider>
  )
}

export default App
