import React, { useState } from "react";
import Button from 'react-bootstrap/Button'


const Search = ({hello}) => {
  const [search, setSearch] = useState("");
  const handleChange = (event) => {
   hello(true);
    setSearch(() => {
      console.log(search);
      return event.target.value;
    });
    
  };
  const textInput = React.useRef(" ");
  const clearInput = (event) => {
    // event.target.reset();
    event.preventDefault();
    console.log(search);
    textInput.current.value = "";
};


const upd =() =>{
 hello(false);
}

    return (
         <form  onSubmit={clearInput}>

            <input onKeyUp={upd}  ref={textInput} type="text" value={search} onChange= {handleChange} placeholder="SEARCH" />
             <Button as="input" type="submit" value="Submit"  size="sm" />
          </form>

    );
   
}

export default Search

