import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Layout } from './components/layout'
import { AllMeetupsPage, FavoritesPage, NewMeetupPage } from './pages'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<AllMeetupsPage />} />
        <Route path="/new-meetup" element={<NewMeetupPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Layout>
  )
}

export default App
