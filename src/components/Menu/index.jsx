import React from 'react'
import Logo from '../../assets/imgs/logoFlix.png'
import {Link} from 'react-router-dom'
import './Menu.css'
function Menu ()   {
    return (
        <nav className='Menu'>
            <Link to='/'>
                <img className='Logo' src={Logo} alt="MombasFlix logo"/>
            </Link>
            <Link className='ButtonLink' to='/cadastro/video'>
                Novo video
            </Link>
        </nav>
    )

}

export default Menu