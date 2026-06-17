
import './App.css'
import Navabar from '../components/Navabar.jsx'
import { useState } from 'react'
import Card from '../components/card.jsx'

function App() {
  const [Notes, setNotes] = useState([])

  const [currentNote, setcurrentNote] = useState({ title: "", desc: "" })

  const handleSubmit = (e) => {
    e.preventDefault()
    setNotes([...Notes, currentNote])
    setcurrentNote({title:"",desc:""})
  }

  const handleChange = (e) => { setcurrentNote({...currentNote, [e.target.name]: e.target.value}) }


  return (
    <>
      <Navabar/>
      <main>
        <h1>Create your note</h1>
        <form  onSubmit={handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>

            <input value={currentNote.title} onChange={handleChange} type='text' name="title" id="title"></input>
          </div>
          <div>
            <label htmlFor='desc'>Description</label>
            <textarea
              name='desc'
              id="desc"
              onChange={handleChange}
              value={currentNote.desc}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </main>
      <section className='noteSection'>
        <h2>Your Notes</h2>
        <div className='container'>
        {Notes && Notes.map(note => {
          return <Card title={note.title} desc={note.desc}/>
        })}
        </div>
      </section>
    </>
  )
}

export default App
