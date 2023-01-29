import React from 'react'
import Header from './components/Header'
import AuthProvider from './providers/AuthProvider'

export default function App() {
  return (
    <>
      <AuthProvider>
        <Header/>
      </AuthProvider>
    </>
  )
}
