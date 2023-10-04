import { useState } from "react";


export const AddCategoria=({onNewCategory})=>{
   const [inputValue, setinputValue] = useState('One Punch');
   const onInputChange=({target})=>{
   
    setinputValue(target.value);
   }
   
   const submit=(event)=>{
    event.preventDefault();
    if(inputValue.trim().length<=1) return;
    
   /* console.log(setCategories);
   console.log("hola"); 
   
   
   setCategories(categories=>[inputValue,...categories]); */
    onNewCategory(inputValue.trim());
    console.log(inputValue+"New")
    setinputValue('');
    /*setCategories(categories=>(){
        [inputValue,...categories]
    });*/
 
    
  

   }
    
    return(
        <form onSubmit={submit}>
            <input
        placeholder='Buscar Gifts' 
        value={inputValue}
        onChange={onInputChange}
       />
        </form>
       
    );
}
