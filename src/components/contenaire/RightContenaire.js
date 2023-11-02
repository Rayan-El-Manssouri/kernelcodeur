import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Section from '../onglet/Section';
import { useState, useEffect } from 'react';

const RightContenaire = () => {
    const [fileList, setFileList] = useState([]);
  
    useEffect(() => {
        // Effectuez une requête HTTP pour obtenir les mises à jour de la liste de fichiers
        fetch('http://localhost:3000/updateFileList')
            .then((data) => {
                setFileList(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);


    return (
        <div className='right_contenaire'>
            <div className='contenaire'>
                <Section RefOnglet="1" title="Nouveau fichier" clicked="false" code="<h1>Test</h1>" />
            </div>
            <div className='snip'>
                <IconPlayerPlayFilled />
            </div>

            <p id="liasons-preload" style={{ visibility: 'hidden' }} value=""></p>
        </div>
    );
};

export default RightContenaire;
