import React, { useState } from 'react';
import { useWeatherContext } from "../../store/globalState";



const SearchForm = () => {
  const [ state, dispatch ] = useWeatherContext();
  const [ searchInput, setSearchInput ] = useState();

  function onSearchSubmit(event){
    event.preventDefault();
    dispatch({
      type: "ADD_CITY",
      payload: searchInput
    })

  }

  const handleSearchChange = (e) =>{
    setSearchInput(e.target.value); 
  }
  return ( 
    <form onSubmit={onSearchSubmit}>
      <input value={ searchInput } onChange={handleSearchChange} className="w-100" type="text" id="input-city"></input>
    </form>
   );
}
 
export default SearchForm;