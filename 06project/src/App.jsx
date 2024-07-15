import React from 'react'
import Inputbox from './components/InputBox'
import useCurrencyInfo from '../customhook/useCurrencyInfo'
import { useState} from 'react'
function App() {
    const [amount,setAmount]=useState()
    const [converted,setConverted]=useState()
    const [from,setFrom]=useState("USD")
    const [to,setTo]=useState("INR")

    const currencyInfo = useCurrencyInfo(from)
    
    const options = Object.keys(currencyInfo) ;
    console.log(currencyInfo);

    const convert = () =>
    {
        setConverted(amount * currencyInfo[to])
    }

    return (
    
    <div className=' w-full justify-center items-center h-screen flex'
        style={{
            backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/001/957/359/large_2x/money-finances-and-technology-concept-design-vector.jpg')`,
        }}
    >
        <div className='w-full'>
        <div className=' bg-gradient-to-tr  mx-auto p-5 w-full backdrop-blur-sm max-w-md rounded-lg '
            
        >
            
                <form
                    onSubmit={(e)=>{
                        e.preventDefault();
                        convert();
                    }}
                >
                <div className='w-full mb-2'>
                <Inputbox
                    label="From"
                    amount={amount}
                    currencyOptions={options}
                    selectCurrency={from}
                    amountChange={(amount)=>setAmount(amount)}
                    currencyChange={(from)=>setFrom(from)}
                />
                </div>
                
                <div className='w-full mb-6'>
                <Inputbox
                    label="To"
                    amount={converted}
                    currencyOptions={options}
                    selectCurrency={to}
                    amountDisable
                    currencyChange={(to)=>setTo(to)}
                />
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
                
                >
                    Convert
                </button>
                </form>
        </div>
        </div>
    </div>
  )
}

export default App