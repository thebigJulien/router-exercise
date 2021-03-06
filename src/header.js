import React from 'react';
import { Link } from 'react-router-dom';


const Navigation = () => {
    return (
        <header>
            <h1>SPICE GIRLS</h1>
            <nav className="nav">
                <ul>
                    <li>
                    <Link to="/victoria">Victoria Beckham</Link>
                    </li>
                    <li>
                    <Link to="/melC">Melanie Chisholm</Link>
                    </li>
                    <li>
                    <Link to="/melB">Melanie Brown</Link>
                    </li>
                    <li>
                    <Link to="/Geri">Geri Halliwell</Link>
                    </li>
                    <li>
                    <Link to="/Emma">Emma Bunton</Link>
                    </li>

                </ul>
            </nav>
        </header>
    );
};




export default Navigation;
