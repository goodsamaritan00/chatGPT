

import { useContext, useEffect, useState } from 'react'

import { Configuration, OpenAIApi } from 'openai'

import { v4 as uuidv4 } from "uuid";

import Typewriter from 'react-ts-typewriter'

import styles from '../styles/Chat.module.css'

import { myContext } from '../GlobalContext'

import { BiSend } from 'react-icons/bi';


// sortby
const sortby = [
  {
    name: 'L'
  }
]

export const CreatedChat = () => {

const [question, setQuestion] = useState('Hello')
const [answer, setAnswer] = useState()
const [loader, setLoader] = useState(false)

const [chatMessages, setChatMessages] = useState([])

const openai = new OpenAIApi(new Configuration({
  apiKey: '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'
}))

const handleSubmit = async () => {
  setLoader(true)
  const res = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{
      role: "user",
      content: question
    }]
  })
  setAnswer(res.data.choices[0].message.content)
  setChatMessages([...chatMessages,
    {
      q: question,
      a: res.data.choices[0].message.content,
      id: uuidv4()
    }
  ])
  setLoader(false)

console.log(res)
}

  return (
    <div className={styles.chat}>
      <div className={styles.textWrapper}>
        {chatMessages.map((msg) => {
            return (
              <div className={styles.messageWrapper}>
                <div className={styles.q}>
                  <p>{msg.q}</p>
                </div>
                <div className={styles.a}>
                  <div className={styles.typewriterWrapper}>
                    <Typewriter
                      text={msg.a}
                      speed={20}
                      cursor={false}
                    />
                  </div>
                </div>
              </div>
            )
          })}
      </div>
      <form onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}>
        <input onChange={(e) => setQuestion(e.target.value)} />
        <button style={{ background: question.length > 0 && '#00A67E' }}><BiSend style={{ color: question.length > 0 && 'white' }} className={styles.searchIcon} /></button>
      </form>
    </div>
  )
}

export default CreatedChat

