import React from 'react'
import SideBar from './components/SideBar'
import Feed from './components/Feed'

export default function Home() {
  return (
    <main className='flex min-h-screen max-w-7xl mx-auto'>
      {/* Side Bar */}
      <SideBar />

      {/* Feeds */}
      <Feed />  

      {/* Widgets */}

      {/* Models */}
    </main>
  )
}
