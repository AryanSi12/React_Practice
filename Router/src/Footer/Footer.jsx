import React from 'react'

function Footer() {
  return (
    <div className='bg-indigo-50 border border-t-slate-500'>
        <div className=" flex justify-between py-16  px-40">
            <div className='items-center flex gap-2 '>
            <img src="1.jpeg" className=' max-h-14 max-w-14 ' alt="" />
            <span className=' font-medium text-2xl '>DummySITE</span>
            </div>
            <div className='flex gap-32'>
                <div className="block">
                    <ul>
                    <li className='font-medium text-xl mb-8 text-black'>RESOURCES</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>Home</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>About us</li>
                    <li className='font-medium text-xl text-slate-500'>Contact us</li>
                    
                    </ul>
                </div>
                <div className="block">
                    <ul>
                    <li className='font-medium text-xl mb-8 text-black'>FOLLOW US</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>Instagram</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>Youtube</li>
                    </ul>
                </div>
                <div className="block">
                    <ul>
                    <li className='font-medium text-xl mb-8 text-black'>LEGAL</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>Privacy Policy</li>
                    <li className='font-medium text-xl mb-5 text-slate-500'>Terms & Conditions</li>
                    </ul>
                </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer