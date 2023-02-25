import react, {useState} from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from './components/Page/Page';
import { Home } from './components/Home/Home';
import { Searchbar } from './components/Search/Searchbar/Searchbar';
import { default_fish } from './fishlist';
import { RandButton } from './components/Search/Button/RandButton';
function App() {
    const [info, setInfo] = useState(default_fish);
    const [fish, setFish] = useState(default_fish.title);
    const [searchClear, setSearchClear] = useState(false)
  return (
      

    <div className="App">
      <header className="App-header">
        <BrowserRouter>
            <Searchbar info={info} 
                       setInfo={setInfo}
                       fish={fish}
                       setFish={setFish}
                       setSearchClear={setSearchClear}
                       searchClear={searchClear}/>
            <RandButton info={info} 
                       setInfo={setInfo}
                       fish={fish}
                       setFish={setFish}
                       setSearchClear={setSearchClear}
                       searchClear={searchClear}/>
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


