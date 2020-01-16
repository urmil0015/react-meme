import React from 'react';
import './App.css';
import './index.css';

function Header(){
    return(
    
        <header className='head-image'>
            <img style={{float: "left"}} width="150" height="150" src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" alt="Not right??" />
            <p>Meme <br /> Generator</p>
        </header>
    )
}

export default Header