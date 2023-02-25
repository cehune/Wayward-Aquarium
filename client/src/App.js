import react, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from './components/Page/Page';
import { Home } from './components/Home/Home';
import { Searchbar } from './components/Searchbar/Searchbar';
import { default_fish } from './fishlist';
function App() {
    const [info, setInfo] = useState(default_fish);
    const [fish, setFish] = useState(default_fish.title);
  return (
      

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Searchbar info={info} 
                       setInfo={setInfo}
                       fish={fish}
                       setFish={setFish}/>

            <Routes>
                <Route index element={<Home />} />
                <Route path='fish' element={<Page 
                                                info={info} 
                                                setInfo={setInfo}
                                                fish={fish}
                                                setFish={setFish}/>} />
            </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;


