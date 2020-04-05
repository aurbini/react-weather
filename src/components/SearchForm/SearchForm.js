import React, { useRef, useState } from 'react';
import { useWeatherContext } from "../../utils/GlobalState";



const SearchForm = () => {



  const [state, dispatch] = useWeatherContext();
  const [ searchInput, setSearchInput ] = useState();
  

  function onSearchSubmit(event){
    event.preventDefault();
    dispatch({
      type: "ADDCITY",
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