import react, { useState } from 'react'
import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Page } from './components/Page/Page';
import { Home } from './components/Home/Home';
import { Searchbar } from './components/Search/Searchbar/Searchbar';
import { default_fish, gallery_imgs } from './fishlist';
import { RandButton } from './components/Search/Button/RandButton';
import { FishCategory } from './components/Group/Fish/FishCategory';
import { MolluscCategory } from './components/Group/Molluscs/MolluscCategory';
import { SharkCategory } from './components/Group/Sharks/SharkCategory';
import { CrustaceanCategory } from './components/Group/Crustacean/CrustaceanCategory';
import { OtherCategory } from './components/Group/Other/OtherCategory';

import { Navbar } from './components/Navbar/Navbar';
function App() {
  const [loading, setLoading] = useState(false)
  const [info, setInfo] = useState(default_fish);
  const [fish, setFish] = useState(default_fish.title);
  const [gallery, setGallery] = useState(gallery_imgs)
  const [cookedGallery, setCookedGallery] = useState(gallery_imgs)
  const [seeInfo, setSeeInfo] = useState(true)

  return (


    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Navbar info={info}
            setInfo={setInfo}
            fish={fish}
            setFish={setFish}
            setGallery={setGallery}
            gallery={gallery}
            setCookedGallery={setCookedGallery}
            cookedGallery={cookedGallery}
            loading={loading}
            setLoading={setLoading} />


          <Routes>
            <Route index element={<Home />} />
            <Route path='fish' element={<Page
              info={info}
              setGallery={setGallery}
              gallery={gallery}
              cookedGallery={cookedGallery}
              seeInfo={seeInfo}
              setSeeInfo={setSeeInfo} />}
            />
            <Route path='fishCategory' element={<FishCategory info={info}
              setInfo={setInfo}
              setFish={setFish}
              setGallery={setGallery}
              setCookedGallery={setCookedGallery}
              />} />
            <Route path='sharkCategory' element={<SharkCategory info={info}
              setInfo={setInfo}
              setFish={setFish}
              setGallery={setGallery}
              setCookedGallery={setCookedGallery} />} />
            <Route path='molluscCategory' element={<MolluscCategory info={info}
              setInfo={setInfo}
              setFish={setFish}
              setGallery={setGallery}
              setCookedGallery={setCookedGallery}/>} />
            <Route path='crustaceanCategory' element={<CrustaceanCategory
              setInfo={setInfo}
              setFish={setFish}
              setGallery={setGallery}
              setCookedGallery={setCookedGallery} />} />
            <Route path='otherCategory' element={<OtherCategory info={info}
              setInfo={setInfo}
              setFish={setFish}
              setGallery={setGallery}
              setCookedGallery={setCookedGallery} />} />

          </Routes>
        </BrowserRouter>

      </header>
    </div>
  );
}

export default App;


