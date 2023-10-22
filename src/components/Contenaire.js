import React from 'react';
import { IconSearch, IconFolder, IconBell, IconBrandGit, IconTerminal2, IconTool, IconSettings, IconPlayerPlayFilled, IconFile } from '@tabler/icons-react';
const Contenaire = () => {
    return (
        <div className='contenaire'>
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

            <div className='right_contenaire'>
                <div className='onglet'>
                    <div className='contenaire'>
                        <section className='active'>
                            <IconFile />
                            <p>Nouveau fichier</p>
                        </section>
                        <section>
                            <IconFile />
                            <p>Nouveau fichier</p>
                        </section>
                        <section>
                            <IconFile />
                            <p>Nouveau fichier</p>
                        </section>
                    </div>
                    <div className='snip'>
                        <IconPlayerPlayFilled />
                    </div>
                </div>

                <div className='text_code'>
                    <div className='count'>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                        <p>1</p>
                    </div>
                    <textarea></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contenaire;