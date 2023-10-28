import React from 'react';
import { IconSearch, IconFolder, IconBell, IconBrandGit, IconTerminal2, IconTool, IconSettings, IconBrandDiscord, IconGif, IconGift } from '@tabler/icons-react';
import { Tooltip } from 'react-tooltip';

const LeftSidebar = () => {
    return (
        <div className='left_sidebar'>
            <div className='separator' data-tip='Folder'>
                <IconFolder className='icon' />
                <span className='title'>Dossier</span>
            </div>
            <div className='separator' data-tip='Search'>
                <IconSearch className='icon' />
                <span className='title'>Search</span>
            </div>
            <div className='separator' data-tip='Git'>
                <IconBrandGit className='icon' />
                <span className='title'>Github</span>
            </div>
            <div className='separator' data-tip='Tool'>
                <IconTool className='icon' />
                <span className='title'>Tools</span>
            </div>
            <div className='separator' data-tip='Terminal'>
                <IconTerminal2 className='icon' />
                <span className='title'>Terminal</span>
            </div>
            <div className='bottom'>
                <div className='separator' data-tip='Bell'>
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
            <Tooltip />
        </div>
    );
};

export default LeftSidebar;