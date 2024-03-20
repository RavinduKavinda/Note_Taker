import React, { useState } from 'react'
import toast from 'react-hot-toast';

const Home = () => {

    {/* Initial state */}
    const initialNote = {
        title:"",
        message:""
    }

    const [note, setNote] = useState (initialNote)

    {/* handle the input changes */}
    const handleChange = (e) => {
        const{name,value} = e.target;

        setNote(prevNote => (
            {
                ...note,
                [name]:value
            }
        ));
    };

    {/* handle the form submission */}
    const handleSubmit = async(e) => {
        e.preventDefault();

        try{
            const res = await fetch("http://localhost:8000/add-note",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(note)
        })

        if(res.ok){
            toast.success("Note Added")
            setNote(initialNote)
        }
        } catch(err) {
            console.log(err)
        }
    };

  return (
    <section className="body-font relative">
        <div className="container px-5 py-10 mx-auto">
            {/* Home Head */}
            <div className="flex flex-col text-center w-full mb-12">
                <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
                    Add A Note
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                    Please<br/>Fill the following form to add a new note.
                </p>
            </div>

            {/* Form Details*/}
            <form className="lg:w-1/2 md:w-2/3 mx-auto" onSubmit={handleSubmit}>
                <div className="flex flex-wrap -m-2">
                    <div className="p-2 w-full">
                        <div className="relative">
                            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                                Title
                            </label>
                            <input
                            type="text"
                            id="title"
                            name="title"
                            className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                            value={note.title}
                            onChange={handleChange}
                            required/>
                        </div>
                    </div>

                    <div className="p-2 w-full">
                        <div className="relative">
                            <label
                                htmlFor="message"
                                className="leading-7 text-sm text-gray-400"
                            >
                                Your Note
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-purple-500 focus:bg-gray-900 focus:ring-2 focus:ring-purple-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                                value={note.message}
                                onChange={handleChange}
                                required/>
                        </div>
                    </div>

                    <div className="p-2 w-full" onSubmit={handleSubmit}>
                        <button className="flex mx-auto text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
                            Submit
                        </button>
                    </div>

                </div>
            </form>
        </div>
    </section>
    )
}

export default Home