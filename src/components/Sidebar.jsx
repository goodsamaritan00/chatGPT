import React, { useContext, useState } from 'react'

import styles from '../styles/Sidebar.module.css'

import { v4 as uuidv4 } from "uuid";

import { myContext } from '../GlobalContext'
import { Link } from 'react-router-dom'

import logo from '../assets/gptLogo.png'




export const Sidebar = () => {

const [newChat, setNewChat] = useState([])

const { sideChat, setSideChat } = useContext(myContext)


// create new chat
const handleCreateNew = () => {
  setNewChat([...newChat, 
    {
      name: 'New Chat',
      id: uuidv4()
    }
  ])

}


console.log(newChat)

  return (
    <div className={styles.sidebar}>
      <Link to='/'>
        <img className={styles.logo} src={logo} />
      </Link>
      <button onClick={() => handleCreateNew()}>Create new</button>
      <ul>
        {newChat.map((chat) => {
          return <li key={chat.id}><Link to={`/c/${chat.id}`}>{chat.name}</Link></li>
        })}
      </ul>
    </div>
  )
}
