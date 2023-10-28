import React from 'react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Section from '../onglet/Section';
import TextCodeSection from './CodeContenaire/TextCode';
import Welcome from '../onglet/Welcome';
const RightContenaire = () => {
    return (
        <div className='right_contenaire'>
            <div className='onglet'>
                <div className='contenaire'>
                    <Section RefOnglet="1" className="active" title="Bienvenue" />
                    <Section RefOnglet="2" title="Nouveau fichier" />
                </div>
                <div className='snip'>
                    <IconPlayerPlayFilled />
                </div>
            </div>
            <div className='section_code'>
                <TextCodeSection TextRef="2" />
                <Welcome />
            </div>
        </div>
    );
};
export default RightContenaire;