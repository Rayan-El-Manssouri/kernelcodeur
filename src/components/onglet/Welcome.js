import React from 'react';

const Welcome = () => {
    return (
        <div className="InfoBulleZero" id='TextArea_code_1' data-anim="1">
            <div className='actions' id='count-active-0'>
                <div className='click'>
                    <span>Faites une actions</span>
                    <button>Ouvrir un fichier</button>
                    <button>Ouvrir un dossier</button>
                </div>
                <div className='recents'>
                    <h1>Element récents</h1>
                    <div className='recent-element'></div>
                </div>
                <div className='help'>
                    <p>Aide</p>
                    <hr></hr>
                    <a href='dqssqdqd'>Discord</a>
                    <a href='dqssqdqd'>Documentation</a>
                </div>
            </div>
        </div>
    );
};

export default Welcome;