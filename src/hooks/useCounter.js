import { useState } from "react";

export const useCounter = (init) => {
    const [count,setCount]= useState(init.initialValue);
 const [disable,setDisable]=useState(false);
 


 const incCount=(value)=>{
  
  if(value){
    if(count<init.maxValue){
      setDisable(false)
      setCount(count + value)
    }
    else{
      setDisable(true)
     
    }
    

  }
  else{
    value=1;
    if(count<init.maxValue){
      setDisable(false)
      setCount(count + value)
    }
    else{
      setDisable(true)
      
    }
   
  }


 }

 const decCount=(value)=>{
  
     
      if(count>init.minValue){
        setCount(count-value);
        setDisable(false)
       }
       else{
        setDisable(true)
       }

     
 }
return {count,incCount,decCount};
};
