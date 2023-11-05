import React, { useEffect, useRef } from 'react';
import '../styles/index.scss'
import Header from '../components/Header';
import Contenaire from '../components/Contenaire';
import { IconFile, IconGitBranch } from '@tabler/icons-react';

const Home = () => {
    const pRef = useRef(null);

    useEffect(() => {
        // Observer les changements dans le contenu de la balise p
        const observer = new MutationObserver((mutationsList) => {
            for (const mutation of mutationsList) {
                if (mutation.type === 'childList' || mutation.type === 'characterData') {
                    const newContent = pRef.current.innerHTML;
                    console.log("Texte changé : ", newContent);
                }
            }
        });

        observer.observe(pRef.current, { childList: true, characterData: true, subtree: true });

        return () => {
            // Arrêter d'observer lorsque le composant se démonte
            observer.disconnect();
        };
    }, [pRef]);

    return (
        <>
            <Header />
            <Contenaire />
            <div className='top_side_bar'>
                <div className='git_branch'>
                    <IconGitBranch />
                    <p>master</p>
                </div>
                <div className='git_branch'>
                    <IconFile />
                    <p>Plain text</p>
                </div>
            </div>
            <p id="result" style={{ visibility: 'visible' }} ref={pRef}>Initial text</p>
        </>
    );
};

export default Home;