import React from 'react'
import Header from './Header'

export default function App({ children }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
