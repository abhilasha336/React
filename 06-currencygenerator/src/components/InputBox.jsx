import React,{useId} from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    selectedCurrency="usd",
    onCurrencyChange,
    currencyOptions=[],
    amountDisabled=false,
    currencyDisabled=false,
    className=""
}) {
   const id=useId()
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        
        <div className='w-1-2'>
            <label htmlFor={id}
                className='text-block/40 mb-2 inline-block'
            >{label}</label>
            <input id={id}
                   type="number"
                   className='w-full bg-transparent py-1.6'
                   placeholder='Choose Amount'
                   value={amount}
                   disabled={amountDisabled}
                   onChange={(e)=>{onAmountChange &&onAmountChange(Number(e.target.value))}}>
            </input>
        </div>

        <div className='w-1/2 flex flex-wrap justify-end text-right'>
            <p className='text-black/40 mb-2 w-full'>
                Currency Type
            </p>
            <select className='rounded-lg px-1 py-1 bg-gray-200 cursor-pointer outline-none'
                    value={selectedCurrency}>
                        {
                            currencyOptions.map((currency)=>(
                                <option key={currency} value={currency}>{currency}</option>
                            ))
                        }
            </select>

        </div>
    </div>
  )
}

export default InputBox