import react, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { options, options1} from '../../../fishlist';
import axios from 'axios'
import { updateInfo } from '../UpdateInfo';


export const Searchbar=({info, setInfo, fish, setFish, searchClear, setSearchClear}) => {
  const [inputValue, setInputValue] = useState('');
  console.log(`1${searchClear}`)
  const fetchPosts = async(URL) => await axios.get(URL)
      .then((res) => {
          setInfo(updateInfo(res))
  })

  return (
    <div>

      <br />
      <Autocomplete

        onChange={(event, newFish) => {
          if (newFish !== null) {
            setFish(newFish);
            fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${newFish}`)]}`);
          }
          if(searchClear) {

          }
          setSearchClear(false)
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={  (params) => <TextField {...params} label="Fish" />}
      />
      
      <button onClick={() => {
        document.getElementsByClassName('MuiAutocomplete-clearIndicator')[0].click()
      }}> yeah eyah</button>

    </div>
  );
}
