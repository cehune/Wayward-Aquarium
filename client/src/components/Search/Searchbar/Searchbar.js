import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { options, options1} from '../../../fishlist';
import axios from 'axios'
import { fetchGoogle, fetchGoogleCooked } from '../../../api/googleSearch';
import {useNavigate} from 'react-router-dom';
import { updateInfo } from '../UpdateInfo';


export const Searchbar=({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const fetchPosts = async(URL) => await axios.get(URL)
      .then((res) => {
          setInfo(updateInfo(res))
  })
  const fetchImages = async(URL, cooked) => await axios.get(URL)
      .then((res) => {

          if (cooked !== true) {
            setGallery(fetchGoogle(res))
          } else if (cooked == true) {
            setCookedGallery(fetchGoogleCooked(res))
          }
  })


  return (
    <div>

      <Autocomplete 

        onChange={(event, newFish) => {
          if (newFish !== null) {
            setFish(newFish);
            fetchPosts(`http://localhost:5000/api/${options1[options.indexOf(`${newFish}`)]}`);
            fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=${newFish}&searchType=image`, false)
            fetchImages(`https://www.googleapis.com/customsearch/v1?key=AIzaSyC7rfERpLa72sPFloCJTyzPwOyeZpauM34&cx=537b9c7d871a14705&q=cooked%20${newFish}&searchType=image`, true)

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
        sx={{ width: 225, background:"white",  borderRadius:20, margin: 2}}
        renderInput={  (params) => <TextField {...params} label="Search Fish" size="medium" />}
      />
      
      

    </div>
  );
}
