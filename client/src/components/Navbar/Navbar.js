import React from 'react'
import { AppBar, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { Searchbar } from '../Search/Searchbar/Searchbar'
import { RandButton } from '../Search/Button/RandButton'

import "./navbar.scss"
export const Navbar = ({ info, setInfo, setFish}) => {
    return (
        <div>
            <AppBar position='fixed' sx={{ background: "#313432" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", width: "100%"}}>
                    <div>
                        <Link to='/' className='link' style={{ textDecoration: "none" }} onClick={() => {
                            window.scrollTo(0, 0)
                        }}>
                            <div className="iconlink" >
                                <h4 className='iconfull'>wayward aquarium</h4>
                                <h4 className='iconsmall'>wa</h4>
                            </div>
                        </Link>
                    </div>
                    <div style={{ display: "flex", alignItems: 'center' }}>
                        <RandButton info={info}
                            setInfo={setInfo}
                        />
                        <Searchbar
                            setInfo={setInfo}
                            setFish={setFish}
                        />
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}
