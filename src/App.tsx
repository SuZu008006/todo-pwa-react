import React from 'react'
import AuthProvider from './providers/AuthProvider'
import Header from './components/Header'

function App() {
  return (
    <>
      <AuthProvider>
        <Header></Header>
      </AuthProvider>
    </>
  )
}

export default App
