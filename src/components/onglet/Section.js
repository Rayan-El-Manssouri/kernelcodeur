import { IconFile, IconX } from '@tabler/icons-react';
import React, { useState } from 'react';
import TextCode from '../contenaire/CodeContenaire/TextCode'


/**
 * Composant de Section onglet.
 *
 * @param {object} props - Les propriétés du composant.
 * @param {string} props.className - La classe CSS de la section (peut être 'active' ou 'inactive').
 * @param {number} props.RefOnglet - La référence à un onglet.
 * @param {string} props.title - Le titre de la section.
 * @param {function} props.clicked - La fonction de gestion du clic (appelée lorsque la section est cliquée).
 */

const Section = ({ className, RefOnglet, title, clicked, code }) => {
    const [isActive] = useState(className === "active");

    const handleClick = () => {
        const activeElement = document.querySelector(`.right_contenaire div[data-anim="${RefOnglet}"]`);
        const IndexMoins = RefOnglet - 1;

        const countElements = document.getElementById(`count-active-${IndexMoins}`);
        if (countElements == null) {
            return;
        }
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
            });

            elements.forEach((el) => {
                el.classList.remove('active');
            });

            activeElement.classList.add('active');
        }

        function CursorMove() {
            const borderCursor = document.getElementById(`border-cursor-${RefOnglet}`);
            const countElement = document.getElementById(`count-active-${IndexMoins}`).querySelector("p.active");
            borderCursor.style.display = "block";
            borderCursor.style.position = "fixed";
            borderCursor.style.top = countElement.getBoundingClientRect().y + "px";
        }

        CursorMove()
    };

    const handleClickX = () => {
        if (clicked === "true") {
            return;
        }
        const sectionClicked = document.querySelector(`.onglet .contenaire section[data-anim="${RefOnglet}"]`);
        const sectionActive = document.querySelectorAll(`.section_code .text_code[data-anim="${RefOnglet}"]`);

        if (sectionClicked && sectionClicked.classList.contains('active')) {
            sectionClicked.style.display = "none";
        }

        sectionActive.forEach((sa) => {
            if (sa.classList.contains('active')) {
                sa.style.display = "none";
            }
        });

        const nextSection = sectionClicked.nextElementSibling || sectionClicked.previousElementSibling;

        if (nextSection) {
            nextSection.click();
        }
    };

    const myClass = isActive ? 'active' : '';

    return (
        <section className={myClass} id={`sections-onglets-${RefOnglet}`} >
            <div className='onglet-title'>
                <div className='sections-contenaire' onClick={handleClick} data-anim={RefOnglet}>
                    <IconFile />
                    <p>{title}</p>
                    <IconX onClick={handleClickX} className='FermetureOngletX' />
                </div>
            </div>
            <div className='section_code'>
                <TextCode TextRef={RefOnglet} value={code} />
            </div>
        </section>
    );
};


export default Section;