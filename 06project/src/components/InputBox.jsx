import React from 'react'
function Inputbox({
    label,
    amountDisable=false,
    amount,
    amountChange,
    currencyChange,
    selectCurrency="usd",
    currencyOptions=[],

}) {
  return (
    <div className='w-full bg-white rounded-lg'>
  <label for="price" class=" ml-3 mt-2 block text-sm font-medium leading-6 text-gray-900">{label}</label>
  <div class="relative mt-2 rounded-md shadow-sm">
    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
      
    </div>
    <input type="number" class="block w-full rounded-md pl-7 pr-20 text-gray-900  py-2 bg-transparent placeholder:text-gray-400  outline-none" 
     placeholder="0.00"
     value={amount}
     disabled={amountDisable}
     onChange={(e)=>amountChange && amountChange(Number(e.target.value))}
     />
    <div class="absolute inset-y-0 right-0 flex items-center">
      <label for="currency" class="sr-only">Currency</label>
      <select id="currency" name="currency" class="h-full cursor-pointer rounded-md bg-transparent py-0 pl-2 pr-7 text-gray-500  sm:text-sm"
    value={selectCurrency}
    onChange={(e)=>currencyChange && currencyChange(e.target.value)}
      >
        {currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
        ))}
      </select>
    </div>
  </div>
</div>
  )
}

export default Inputbox