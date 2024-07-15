import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect(() => {
        console.log(currency);
        fetch(`https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ql5vOZTz2cOYo0ell8s45M1j9Vhuz4k4LOFwUODG&base_currency=${currency}`)
        .then((response) => response.json())
        .then((response) => setData(response.data))
       
    }, [currency])
    return data
}

export default useCurrencyInfo;