import { useState } from 'react'


function App() {
  const [Color, setColor] = useState("black")

  return (
    <div className='w-full  h-screen duration-300 p-6'
    style={{backgroundColor:Color}}
    >
     
      <div className=' fixed flex px-2 bottom-12 inset-x-0 justify-center bg'>
        <div className='flex flex-wrap justify-center gap-7 px-7 py-5  bg-slate-200 rounded-2xl'>
        <button onClick={()=>setColor("red")} className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-red-500 duration-300  outline-none bg-red-700 rounded-3xl px-7 py-4 shadow-lg text-white'>Red</button>
        <button onClick={()=>setColor("yellow")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-500 duration-300  outline-none bg-yellow-500 rounded-3xl px-7 py-4 shadow-lg text-white'>Yellow</button>
        <button onClick={()=>setColor("green")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-green-500 duration-300  outline-none bg-green-700 rounded-3xl px-7 py-4 shadow-lg text-white'>Green</button>
        
        <button onClick={()=>setColor("blue")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300  outline-none bg-blue-700 rounded-3xl px-7 py-4 shadow-lg text-white'>Blue</button>
        <button onClick={()=>setColor("pink")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300  outline-none  bg-pink-700 rounded-3xl px-7 py-4 text-white shadow-lg'>Pink</button>
        <button onClick={()=>setColor("purple")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-purple-500 duration-300  outline-none bg-purple-700 rounded-3xl px-7 py-4 text-white shadow-lg'>Purple</button>
        <button onClick={()=>setColor("orange")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-orange-500 duration-300  outline-none bg-orange-700 rounded-3xl px-7 py-4 text-white shadow-lg'>Orange</button>
        <button onClick={()=>setColor("violet")} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-violet-500 duration-300  outline-none bg-violet-700 rounded-3xl px-7 py-4 text-white shadow-lg'>Violet</button>
        </div>
        
      </div>
    </div>
  )
}

export default App
