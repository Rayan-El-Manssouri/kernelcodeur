import React from 'react';
import LeftSidebar from './contenaire/LeftSidebar';
import RightContenaire from './contenaire/RightContenaire';

const Contenaire = () => {

    return (
        <div className='contenaire'>
            <LeftSidebar />
            <RightContenaire />
        </div>
    );

};

export default Contenaire;