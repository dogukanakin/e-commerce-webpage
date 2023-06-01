import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Home, Detail, NotFound } from './pages'
import { Navbar, Footer, Card } from './components'
import { PageContainer } from './container'

const App = () => {
  const { drawer } = useSelector(state => state.drawer)

  console.log('drawer', drawer)
  return (
    <PageContainer>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {drawer && <Card />}
        <Footer />
      </BrowserRouter>
    </PageContainer>
  )
}

export default App
