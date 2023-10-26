import React from 'react';
import { IconChevronDown, IconChevronUp, IconX } from '@tabler/icons-react';
const Header = () => {
    return (
        <header>
            <img src={process.env.PUBLIC_URL + 'assets/logo.png'} alt='Logo kernel Codeur' />
            <ul>
                <li>
                    Fichier
                </li>
                <li>
                    Edit
                </li>
                <li>
                    Selection
                </li>
                <li>
                    View
                </li>
                <li>
                    Go
                </li>
                <li>
                    Run
                </li>
                <li>
                    Help
                </li>
            </ul>

            <div className='right'>
                <IconChevronDown />
                <IconChevronUp />
                <IconX />
            </div>
        </header>
    );
};

export default Header;