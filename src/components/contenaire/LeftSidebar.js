import React, { useState } from 'react';
import { IconSearch, IconFolder, IconBell, IconBrandGit, IconTerminal2, IconTool, IconSettings, IconBrandDiscord, IconGift } from '@tabler/icons-react';

const LeftSidebar = () => {

    const [activeContainer, setActiveContainer] = useState("none");

    const handleIconClick = (containerId) => {
        if (containerId === activeContainer) {
            setActiveContainer("none");
        } else {
            setActiveContainer(containerId);
        }
    };

    return (
        <div className='left_sidebar'>
            <div className='contenaire-icon'>
                <div className={`separator ${activeContainer === 'dossier' ? 'active' : ''}`} onClick={() => handleIconClick('dossier')}>
                    <IconFolder className='icon' />
                    <span className='title'>Dossier</span>
                </div>
                <div className={`separator ${activeContainer === 'search' ? 'active' : ''}`} onClick={() => handleIconClick('search')}>
                    <IconSearch className='icon' />
                    <span className='title'>Search</span>
                </div>
                <div className={`separator ${activeContainer === 'github' ? 'active' : ''}`} onClick={() => handleIconClick('github')}>
                    <IconBrandGit className='icon' />
                    <span className='title'>Github</span>
                </div>
                <div className={`separator ${activeContainer === 'tools' ? 'active' : ''}`} onClick={() => handleIconClick('tools')}>
                    <IconTool className='icon' />
                    <span className='title'>Tools</span>
                </div>
                <div className='separator' data-tip='Terminal'>
                    <IconTerminal2 className='icon' />
                    <span className='title'>Terminal</span>
                </div>
                <div className='bottom'>
                    <div className={`separator ${activeContainer === 'notifications' ? 'active' : ''}`} onClick={() => handleIconClick('notifications')}>
                        <IconBell className='icon' />
                        <span className='title'>Notification</span>
                    </div>
                    <div className='separator' data-tip='Discord'>
                        <IconBrandDiscord className='icon' />
                        <span className='title'>Discord</span>
                    </div>
                    <div className='separator' data-tip='Settings'>
                        <IconGift className='icon' />
                        <span className='title'>Don</span>
                    </div>
                    <div className='separator' data-tip='Settings'>
                        <IconSettings className='icon' />
                        <span className='title'>Settings</span>
                    </div>
                </div>
            </div>

            <div className={`contenaire-clicked ${activeContainer}`} >
                <div className='dossier' id='dosser-contenaire'>
                    <div className='separtor'>
                        <p>Vous-avez aucun dossier ouvert.</p>
                        <div>
                            <label onClick={() => window.electronAPI.handleOpenFolder()}>Ouvrir un dossier</label>
                        </div>
                    </div>
                    <hr></hr>
                    <div className='separtor'>
                        <p>Clouner un dépot depuis github</p>
                        <div>
                            <label for="repo">Ouvrir un repo</label>
                            <input type='file' id='repo' />
                        </div>
                    </div>

                </div>

                <div className='search'>
                    <h1>Rechercher dans le code</h1>
                </div>

                <div className='github'>
                    <h1>Liaison github</h1>
                </div>
                <div className='tools'>
                    <h1>Liaison tools</h1>
                </div>

                <div className='notifications'>
                    <h1>Liaison notifications</h1>
                </div>

            </div>
        </div>
    );
};

export default LeftSidebar;