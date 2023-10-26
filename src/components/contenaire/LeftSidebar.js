import React from 'react';
import { IconSearch, IconFolder, IconBell, IconBrandGit, IconTerminal2, IconTool, IconSettings } from '@tabler/icons-react';

const LeftSidebar = () => {
    return (
        <div className='left_sidebar'>
            <div className='separator'>
                <IconFolder />
            </div>
            <div className='separator'>
                <IconSearch />
            </div>
            <div className='separator'>
                <IconBrandGit />
            </div>
            <div className='separator'>
                <IconTool />
            </div>
            <div className='separator'>
                <IconTerminal2 />
            </div>
            <div className='bottom'>
                <div className='separator'>
                    <IconBell />
                </div>

                <div className='separator'>
                    <IconSettings />
                </div>
            </div>
        </div>
    );
};

export default LeftSidebar;