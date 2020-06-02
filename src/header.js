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
                </ul>
            </nav>
            {/* <nav>
                <ul>
                    <li></li>
                    <li>Melanie Chisholm</li>
                    <li>Melanie Brown</li>
                    <li>Geri Halliwell</li>
                    <li>Emma Bunton</li>
                </ul>
            </nav> */}
        </header>
    );
};




export default Navigation;
