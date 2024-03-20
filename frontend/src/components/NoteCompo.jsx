import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const NoteCompo = ({note}) => {
  return (
    <div className="p-4 md:w-1/3 sm:w-1/2 w-full">

        <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
            <h2 className="title-font font-medium text-2xl text-white">
                {note.title}
            </h2>
            <p className="leading-relaxed">
                {note.message}
            </p>

            {/* card buttons */}
            <div className="flex justify-between pt-5 pl-5 pr-5">
            <button className="flex items-center justify-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-5 rounded-md ">
                <FaEdit className="text-xl" />
            </button>
            <button className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-5 rounded-md ">
                <MdDelete className="text-xl" />
            </button>
            </div>
        </div>

    </div>
  )
}

export default NoteCompo
