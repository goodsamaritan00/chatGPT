import './App.css'

import { useState } from 'react'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import { Root } from './layouts/Root'

import { CreatedChat } from './components/CreatedChat'
import Chat from './components/Chat'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} >
      <Route index element={<Chat />} />
      <Route path='/c/:id' element={<CreatedChat />} />
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
