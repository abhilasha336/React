import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import { InputBox } from './components/index.js';


function App() {
  const [amount,setAmount]=useState(0);
  const[convertedAmount,setConvertedAmount]=useState(0);
  const [from, setFrom] = useState("usd");
  const[to,setTo]=useState('inr');


  const currenctDataFromApiHooks=useCurrencyInfo(from)
  console.log('runnnnnnnnnn',currenctDataFromApiHooks)
  const options=Object.keys(currenctDataFromApiHooks)

  const swap=()=>{
    const tempAmount=amount
    setAmount(convertedAmount)
    setConvertedAmount(tempAmount)
    setFrom(to)
    setTo(from)
  }

  const convert=()=>{
   setConvertedAmount(amount*currenctDataFromApiHooks[to])
  }
  

  return (
   <div className='w-full h-screen flex justify-center items-center bg-cover bg-no-repeat'
        style= {{backgroundImage:`url(https://images.pexels.com/photos/935979/pexels-photo-935979.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)`}}
   >
    <div className='w-full'>
    <div className='w-full  max-w-md mx-auto text-xl text-black text-center border-gray-60 
                    rounded-lg p-5 backdrop-blur-sm bg-white/30 mb-2'>Welcome To Currency Convertor
      </div>
      <div className='w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
        <form onSubmit={(e)=>{
                               e.preventDefault()
                               convert()
                              }
                        }>
          <div className='w-full mb-1'>
            <InputBox label={"from"}
                      amount={amount}
                      currencyOptions={options}
                      onCurrencyChange={(eValue)=>setFrom(eValue)}
                      onAmountChange={(amount)=>setAmount(amount)}
                      selectedCurrency={from}
                      currencyDisabled={'false'}/>
          </div>

          <div className='relative w-full h-0.5'>
            <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-white 
                                rounded-md bg-violet-600 text-white px-5 py-0.5 '
                    onClick={swap}>Swap

            </button>
          </div>

          <div className='w-full mb-1'>
            <InputBox label={"to"}
                      currencyOptions={options}
                      amount={convertedAmount}
                      amountDisabled
                      onAmountChange={(convertedAmount)=>setConvertedAmount(convertedAmount)}

                      onCurrencyChange={(currency)=>setTo(currency)}
                      selectedCurrency={to}
                      />
          </div>

          

          <button type="submit"
                  className='w-full bg-violet-600 text-white px-4 py-3 rounded-lg mt-5'>
                   Convert {from.toUpperCase()} to {to.toUpperCase()}

          </button>

          <button onClick={()=>{
                                setAmount(0);
                                setConvertedAmount(0);  
                              }}      
                  className='w-full bg-violet-600 text-white px-4 py-3 rounded-lg mt-5'>
                   Reset Convertor 

          </button>

        </form>
      </div>

    </div>
   </div>
  )
}

export default App
