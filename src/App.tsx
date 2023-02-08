import React from 'react'
import Header from './components/Header'
import AuthProvider from './providers/AuthProvider'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <>
      <AuthProvider>
        <Header/>
        <Dashboard/>
      </AuthProvider>
    </>
  )
}
