import React, { useState, useEffect } from 'react';
import '../styles/index.scss'
import Header from '../components/Header';
import Contenaire from '../components/Contenaire';
import { IconFile, IconGitBranch } from '@tabler/icons-react';

const Home = () => {
    const [text, setText] = useState("Initial text");

    // Cette fonction mettra à jour le texte lorsque vous le souhaitez
    const updateText = () => {
        // Remplacez le texte ci-dessous par le texte que vous souhaitez afficher
        const newText = "Nouveau texte mis à jour";
        setText(newText);
    }

    useEffect(() => {
        // Utilisez cette fonction pour mettre à jour le texte à chaque fois que nécessaire
        updateText();
    }, []); // Le tableau vide signifie que cela s'exécutera une seule fois après le rendu initial

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
            <p id="result" style={{ visibility: 'visible' }} dangerouslySetInnerHTML={{ __html: text }}></p>
        </>
    );
};

export default Home;

Test