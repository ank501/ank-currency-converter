import Freecurrencyapi from '@everapi/freecurrencyapi-js';


const freecurrencyapi = new Freecurrencyapi('fca_live_D3lmIp1hSD7tTxSATpRSy6sZ9fKuapGM5cZ3ni2A');

export const currencyConverter = async ( fromCurr , toCurr ,Unit )=>{
  
    const res = await freecurrencyapi.latest({
        base_currency: fromCurr,
        currencies: toCurr
    })
    
    const ans = res.data[toCurr] * Unit;
   return ({ fromCurr, toCurr ,Unit,res,ans})
}

currencyConverter("USD" , "INR" , 5 )