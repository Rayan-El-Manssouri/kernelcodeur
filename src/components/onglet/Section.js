import { IconFile } from '@tabler/icons-react';
import React, { useState } from 'react';

const Section = ({ className, RefOnglet }) => {
    const [isActive] = useState(className === "active");

    const handleClick = () => {
        const activeElement = document.querySelector(`.onglet .contenaire section[data-anim="${RefOnglet}"]`);
        const IndexMoins = RefOnglet - 1;
        const countElements = document.getElementById(`count-active-${IndexMoins}`);
        const height = window.innerHeight - 103
        countElements.style.height = height + 'px'

        if (activeElement.classList.contains('active')) {
            return;
        } else {
            const elements = document.querySelectorAll('.onglet .contenaire section.active');
            const sectionnonactive = document.querySelectorAll(`.section_code .text_code`);
            const sectionActive = document.querySelectorAll(`.section_code .text_code[data-anim="${RefOnglet}"]`);

            sectionnonactive.forEach((sa) => {
                sa.classList.remove('active');
            });

            sectionActive.forEach((sa) => {
                sa.classList.add('active');
                document.getElementById('')
            });

            elements.forEach((el) => {
                el.classList.remove('active');
            });

            activeElement.classList.add('active');
        }
    };

    const myClass = isActive ? 'active' : '';

    return (
        <section className={myClass} onClick={handleClick} data-anim={RefOnglet}>
            <IconFile />
            <p>Nouveau fichier</p>
        </section>
    );
};

export default Section;