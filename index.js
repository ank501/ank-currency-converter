import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_D3lmIp1hSD7tTxSATpRSy6sZ9fKuapGM5cZ3ni2A');

export const currencyConverter = async ( fromCurr , toCurr ,Unit )=>{
  
    const res = await freecurrencyapi.latest({
        base_currency: fromCurr,
        currencies: toCurr
    })
    
    const multiplier = res.data[toCurr] * Unit;
   return ({res,multiplier})
}

currencyConverter("USD" , "INR" , 5 )