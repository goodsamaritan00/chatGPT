import React, { useState } from 'react'

import { Sidebar } from '../components/Sidebar'
import { Chat } from '../components/Chat'

// styles
import styles from '../styles/Root.module.css'
import { Outlet } from 'react-router-dom'

// context
import { useContext } from 'react'
import { myContext } from '../GlobalContext'

export const Root = () => {

const [sideChat, setSideChat] = useState([])


console.log(sideChat)

  return (
    <myContext.Provider value={{ sideChat, setSideChat }}>
      <div className={styles.root} >
        <Sidebar />
        <Outlet />
      </div>
    </myContext.Provider>
  )
}
