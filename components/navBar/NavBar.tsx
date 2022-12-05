import React from 'react';
import Link from 'next/link';

const NavBar: React.FC = () => {
    return(
        <div>
            <nav>
                <ul>
                    <Link href='/'>
                        Home
                    </Link>
                    <Link href='/about'>
                        About
                    </Link>
                </ul>
            </nav> 
        </div>
    );
}
export default NavBar;