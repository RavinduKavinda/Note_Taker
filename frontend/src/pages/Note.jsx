import React from 'react'
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";


const Note = () => {
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
        <div className="flex flex-wrap text-center pl-[10%] pr-[10%]">

          {/* note card */}
          <div className="p-4 md:w-1/3 sm:w-1/2 w-full">

            <div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
              <h2 className="title-font font-medium text-2xl text-white">
                Title
              </h2>
              <p className="leading-relaxed">
                This is the message.
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

        </div>
      </div>
    </section>

  )
}

export default Note
