import React, { useState } from 'react';
import { useWeatherContext } from "../../store/globalState";
import { customForm as Form } from '../UI/Form'


const SearchForm = () => {
  const [ state, dispatch ] = useWeatherContext();
  const [ searchInput, setSearchInput ] = useState('');

  function handleSearchSubmit(event){
    console.log('form searhc hit')
    event.preventDefault();
    // dispatch({
    //   type: "ADD_CITY",
    //   payload: searchInput
    // })
    // setSearchInput('')
  }

  const handleSearchChange = (e) =>{
    setSearchInput(e.target.value); 
  }
  return ( 
    <Form onSubmit={handleSearchSubmit}>
      <input 
        value={ searchInput } 
        onChange={handleSearchChange} 
        className="w-100" 
        type="text" 
        id="input-city">
      </input>
    </Form>
   );
}
 
export default SearchForm;