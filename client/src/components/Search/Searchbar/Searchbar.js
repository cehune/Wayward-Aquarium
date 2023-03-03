import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { options, options1} from '../../../fishlist';
import axios from 'axios'
import {useNavigate} from 'react-router-dom';
import { updateInfo } from '../UpdateInfo';

//Searchbar in the navbar
export const Searchbar=({ setInfo, setFish, setGallery, setCookedGallery}) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const fetchPosts = async(URL) => await axios.get(URL)
      .then((res) => {
          setInfo(updateInfo(res))
  })
  return (
    <div>

      <Autocomplete 

        onChange={async (event, newFish) => {
          if (newFish !== null) {
            setFish(newFish);
            fetchPosts(`PrivateEndpoint/${options1[options.indexOf(`${newFish}`)]}`);
            //Once we set the value (by clicking on a suggestion) then it makes the request
            //Clicking a fish is what triggers the change
            if (window.location.pathname !== '/fish') {
              return navigate('/fish')
            }
          }
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        id="controllable-states-demo"
        options={options}
        sx={{ width: 200, background:"white",  borderRadius:20, margin: 1, marginRight: 3}}
        renderInput={  (params) => <TextField {...params} label="Search Fish" size="medium" />}
      />
      
      

    </div>
  );
}
