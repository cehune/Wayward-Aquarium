import React from 'react'
import { AppBar, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { Searchbar } from '../Search/Searchbar/Searchbar'
import { RandButton } from '../Search/Button/RandButton'
import { red } from '@mui/material/colors'
import "./navbar.scss"
export const Navbar = ({info, setInfo, fish, setFish, gallery, setGallery, setCookedGallery, cookedGallery}) => {
  return (
    <div>
        <AppBar position='fixed' sx={{background: "#313432"}}>
            <Toolbar sx={{display: "flex", justifyContent:"space-between"}}>
                <div>
                <Link  to='/' style={{textDecoration:"none", }}>
                    <div className="iconlink" style={{}}>
                        <Typography variant='h4'className="icon"sx={{fontSize:25,":hover":{color: "#A0B4FC "}}} >wayward aquarium</Typography>
                    </div>
                </Link>
                </div>
                <div style={{display:"flex"}}>
                    <RandButton info={info} 
                        setInfo={setInfo}
                        fish={fish}
                        setFish={setFish}
                        setGallery={setGallery}
                        gallery={gallery}
                        setCookedGallery={setCookedGallery}
                        cookedGallery={cookedGallery}/>
                    <Searchbar info={info} 
                        setInfo={setInfo}
                        fish={fish}
                        setFish={setFish}
                        setGallery={setGallery}
                        gallery={gallery}
                        setCookedGallery={setCookedGallery}
                        cookedGallery={cookedGallery}/>
                </div>
            </Toolbar>
            
        </AppBar>
        
    </div>
  )
}
