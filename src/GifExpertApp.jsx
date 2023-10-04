import {useState} from 'react';
import { AddCategoria,GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);
    //console.log(categories);
    const onAddCategoria=(cadena)=>{
        //setCategories(['Hola Mundo',...categories]);
        //console.log(cadena+"wrer");
        /* const result = categories.filter((word) => word==cadena);
        if(result.length==0){
         setCategories([cadena,...categories]);
       } */
       if(categories.includes(cadena)) return;
       //console.log(cadena+"onAdd");
       setCategories([cadena,...categories]);
        
    }
    let index=0;
  return (
    <>
        {/* Título */}
        <h1>GifExpertApp</h1>
        {/* Input */}
       <AddCategoria onNewCategory={texto=>onAddCategoria(texto)}
       //setCategories={setCategories}
       >
       </AddCategoria>      
            {            
             categories.map((category)=>(
              <GifGrid  
                key={ category } 
                category={ category }/>
             ))           
             }
           
  
    </>
  );
}
