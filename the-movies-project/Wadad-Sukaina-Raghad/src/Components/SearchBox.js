import { Form,FormControl,Button } from 'react-bootstrap';
import React,{useState} from 'react';

export default function SearchBox() {
  
  const [input,setInput]=useState("");

  function handleChange(e){
   console.log(e.target.value);
   setInput(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(input);
     
  }
    return ( 
             <Form inline onSubmit={handleSubmit}>
             <FormControl type="text" placeholder="Search movies here" value={input} className="mr-sm-2 Cursor"  onChange={handleChange}/>
             <Button variant="outline-info">GO!</Button>
           </Form>
        
       
    )
}
