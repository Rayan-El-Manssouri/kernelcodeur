import React from 'react';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Section from '../onglet/Section';
import TextCodeSection from './CodeContenaire/TextCode';

const RightContenaire = () => {
    return (
        <div className='right_contenaire'>
            <div className='onglet'>
                <div className='contenaire'>
                    <Section RefOnglet="1" />
                    <Section className="active" RefOnglet="2" />
                    <Section RefOnglet="3" />
                </div>
                <div className='snip'>
                    <IconPlayerPlayFilled />
                </div>
            </div>
            <div className='section_code'>
                <TextCodeSection TextRef="1" />
                <TextCodeSection TextRef="2" />
                <TextCodeSection TextRef="3" />
            </div>

            <div className='bordure_cursor' />
        </div>
    );
};
export default RightContenaire;