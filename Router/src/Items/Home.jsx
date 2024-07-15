import React from 'react'

function Home() {
  return (
    <div className=' min-h-screen  py-44  px-24 bg-gradient-to-br from-purple-50 via-orange-50 to-transparent'>
        <div className=" flex justify-between">
        
        <img className="w-96 ml-32 " src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="image1" />
        <div className=" block">
        <h1 className='mr-0 mb-6 font-bold text-6xl'>Download Now to avail the offers</h1>
        
        <h1 className='mr-0 mb-6 font-bold text-6xl'>   Click on</h1>
        <button className=' mt-5 hover:bg-orange-600 bg-orange-500 font-medium text-white border border-solid border-slate-500 px-5 py-2 rounded-lg'>
            Download Now!!
        </button>
        </div>
        </div>
        <div className='p-52 ml-72'>
        <img className="sm:w-96 w-48" src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image2" />
        </div>
    </div>
  )
}

export default Home