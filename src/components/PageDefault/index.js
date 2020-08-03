import React from 'react';
import Menu from '../Menu';
import Footer from '../Footer';
//Permite utilizar css dentro do javascript
import './style.css'


function PageDefault(props) {
    return (
        <React.Fragment>
        <Menu></Menu>
        <main>
        {props.children}
        </main>
        <Footer/>
        </React.Fragment>
    )
}

export default PageDefault