import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
const[data,setData]=useState({});
useEffect((currency)=>{
    fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
    .then((response)=>response.json())
    .then((responseData)=>setData(responseData[currency]))
},[currency])

console.log(data)
    return data
}

export default useCurrencyInfo;