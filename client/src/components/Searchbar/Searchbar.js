import react, {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { options } from '../../fishlist';
import axios from 'axios'

const url = 'http://localhost:5000/api';




export const Searchbar=({info, setInfo, fish, setFish}) => {
  const [inputValue, setInputValue] = useState('');
  console.log(fish)

  const yoo = () => {
    console.log(fish)
  }
  const fetchPosts = async(URL) => await axios.get(URL)
  .then((res) => {
    setInfo({
      title: res.data[0].title,
      url: res.data[0].url,
      description: res.data[0].description,
      status: res.data[0].status,
      scientific: res.data[0].scientific,
      health_benefits: res.data[0].health_benefits,
      quote: res.data[0].quote,
      tags: res.data[0].tags,
      img: res.data[0].img,
      cuisine_img: res.data[0].cuisine_img,
      liked: res.data[0].liked,
      Taste: res.data[0].Taste,
      Texture: res.data[0].Texture
  })
  })

  return (
    <div>

      <br />
      <Autocomplete

        onChange={(event, newFish) => {
          setFish(newFish);
          fetchPosts(`http://localhost:5000/api/${newFish}`);

        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}

        id="controllable-states-demo"
        options={options}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" />}
      />
      <button onClick = {(e) => {
        console.log("cool")
      }}></button>
    </div>
  );
}
