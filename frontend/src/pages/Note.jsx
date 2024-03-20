import React, { useEffect, useState } from 'react'
import NoteCompo from '../components/NoteCompo';


const Note = () => {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    const fetchNotes = async() => {
      const res = await fetch("http://localhost:8000/notes");
      const data = await res.json()
      setNotes(data)
    }

    fetchNotes()
  },[])

  //remove note
  const removeNote = async(id) => {
    try {
      const res = await fetch(`http://localhost:8000/notes/${id}`,{
        method:"DELETE"
      })

      if(res.ok){
        console.log("Note Deleted")
        const updatedNotes = notes.filter(note => note._id!==id)
        setNotes(updatedNotes)
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <section className="text-gray-400 body-font">
      <div className="container px-5 py-24 mx-auto">

        {/* Note Head */}
        <div className="flex flex-col text-center w-full mb-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            My Notes
          </h1>
        </div>

        {/* notes */}
        <div className="flex flex-wrap text-center px-[10%]">
          {
            notes.map((note) => {
              return <NoteCompo key={note._id} note ={note} removeNote={removeNote}/>
            })
          }
        </div>
      </div>
    </section>

  )
}

export default Note
