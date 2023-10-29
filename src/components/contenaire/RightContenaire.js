import { IconPlayerPlayFilled } from '@tabler/icons-react';
import Section from '../onglet/Section';

const RightContenaire = () => {

    return (
        <div className='right_contenaire'>
            <div className='contenaire'>
                <Section RefOnglet="1" title="Nouveau fichier" clicked="false" />
            </div>
            <div className='snip'>
                <IconPlayerPlayFilled />
            </div>
        </div>
    );
};

export default RightContenaire;