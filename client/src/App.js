import { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Page } from './components/Page/Page';
import { Home } from './components/Home/Home';
import { default_fish} from './fishlist';
import { FishCategory } from './components/Group/Fish/FishCategory';
import { MolluscCategory } from './components/Group/Molluscs/MolluscCategory';
import { SharkCategory } from './components/Group/Sharks/SharkCategory';
import { CrustaceanCategory } from './components/Group/Crustacean/CrustaceanCategory';
import { OtherCategory } from './components/Group/Other/OtherCategory';
import { Favourites } from './components/Group/Favourites/Favourites';
import { Navbar } from './components/Navbar/Navbar';
function App() {
  const [info, setInfo] = useState(default_fish);
  const [fish, setFish] = useState(default_fish.title);
  const [seeInfo, setSeeInfo] = useState(true)
  const [favourites, setFavourites] = useState([])

  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>

          <Navbar info={info}
            setInfo={setInfo}
            fish={fish}
            setFish={setFish}
            favourites={favourites}
            setFavourites={setFavourites} />

          <Routes>
              <Route index element={<Home />} />
              <Route path='fish' element={<Page
                info={info}
                seeInfo={seeInfo}
                setSeeInfo={setSeeInfo}
                favourites={favourites}
                setFavourites={setFavourites} />}
              />
              <Route path='fishCategory' element={<FishCategory info={info}
                  setInfo={setInfo}/>} />
              <Route path='sharkCategory' element={<SharkCategory info={info}
                  setInfo={setInfo}/>} />
              <Route path='molluscCategory' element={<MolluscCategory info={info}
                  setInfo={setInfo}
                  setFish={setFish}/>} />
              <Route path='crustaceanCategory' element={<CrustaceanCategory
                  setInfo={setInfo}/>} />
              <Route path='otherCategory' element={<OtherCategory info={info}
                  setInfo={setInfo} />} />
              <Route path='favourites' element ={<Favourites favourites={favourites} setInfo={setInfo}/>} />
          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;


