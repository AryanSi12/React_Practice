import { useState,useCallback,useEffect,useRef } from 'react'


function App() {
  const [Length, setLength] = useState(8)
  const [Password,setPassword] = useState();
  const [Number,isnumber]=useState(false);
  const [Character,ischaracter]=useState(false);
  const passwordref = useRef(null)
  //Setting up the password
  const passwordGenerator = useCallback(()=>{
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let pass=""
    if(Number){
      str+="1234567890"
    }if(Character)str+="[]{}!@#$%^&*()?><|"
    for(let i=1;i<=Length;i++)
    {
      let char=Math.floor(Math.random() * str.length  + 1)
      pass+=str.charAt(char);
    }
    setPassword(pass);
  },[Length,Number,Character,setPassword])

  //copy part
  const CopytoClipboard=useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(Password)
  },[Password])
  useEffect(()=>{passwordGenerator()},[setPassword,Length,Number,Character])
  return (
    <>
      <h1 className=' text-4xl text-center text-white mt-3'>Password Generator</h1>
      <div className=' w-full mt-6 px-5 py-5 flex justify-center'>
        <div className=' bg-slate-400 px-12 py-5 rounded-2xl'>
          <div className='flex flex-grow overflow-hidden shadow rounded-lg w-full mb-4'>
        <input type='text' class=" outline-none py-1 px-3 border-slate-200
         placeholder-slate-400 contrast-more:border-slate-400
        contrast-more:placeholder-slate-500 w-full"
        placeholder="Password"
        value={Password}
        readOnly
        ref={passwordref}
        />
        <button onClick={CopytoClipboard} className=' outline-none bg-blue-500 px-3 
        py-0.5 shrink-0 text-slate-200'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2 text-white'>
        <input type='range' className=' mt-2 cursor-pointer'
        min={6} 
        max={100}
        value={Length}
        onChange={(e)=>{setLength(e.target.value)}}
        />
        <label className='mt-1'>Length: {Length}</label>
        
        <input type='checkbox' 
        defaultChecked={Number}
        onChange={()=>{
          isnumber((prev)=>!prev)
        }}
        className='mt-1 cursor-pointer'/>
        <label className='mt-1'>Numbers </label>

        <input type='checkbox'
        defaultChecked={Character}
        onChange={()=>{
          ischaracter((prev)=>!prev)
        }}
        className='mt-1 cursor-pointer'/>
        <label className='mt-1'>Characters</label>
        </div>
        </div>
        
      </div>
    </>
  )
}

export default App
