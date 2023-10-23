import React, { useEffect } from 'react';
import { IconSearch, IconFolder, IconBell, IconBrandGit, IconTerminal2, IconTool, IconSettings, IconPlayerPlayFilled, IconFile } from '@tabler/icons-react';

const Contenaire = () => {
    useEffect(() => {
        // Sélectionnez tous les éléments d'onglet et de section
        const tabs = document.querySelectorAll('.onglet .contenaire section');
        const sections = document.querySelectorAll('.text_code');
        const textareas = document.querySelectorAll('.text_code textarea');
        const counts = document.querySelectorAll('.text_code .count p');

        // Ajoutez un gestionnaire d'événements de clic à chaque élément d'onglet
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                function resize() {
                    const textarea_active = document.getElementById('text-area-contenaire-' + index);
                    const count_active = document.getElementById('count-active-' + index);
                    var cleinHetTextArea = window.innerHeight - 103 + 'px';
                    textarea_active.style.height = cleinHetTextArea;
                    count_active.style.height = cleinHetTextArea;
                }

                resize()
                window.addEventListener('resize', resize)

                // Supprimez la classe "active" de tous les onglets et sections
                tabs.forEach(tab => tab.classList.remove('active'));
                sections.forEach(section => section.classList.remove('active'));

                // Ajoutez la classe "active" à l'onglet et à la section correspondants
                tab.classList.add('active');
                sections[index].classList.add('active');
            });
        });

        // Ajoutez un gestionnaire d'événements d'entrée à chaque textarea
        textareas.forEach((textarea, index) => {
            textarea.addEventListener('input', () => {

                // Séparez le contenu du textarea en lignes
                const lines = textarea.value.split('\n');

                // Mettez à jour le numéro dans la classe count en fonction du nombre de lignes
                counts[index].innerHTML = lines.map((line, i) => i + 1).join('<br>');
            });
        });
    });

    useEffect(() => {
        // Sélectionnez tous les éléments textarea et count
        const textareas = document.querySelectorAll('.text_code textarea');
        const counts = document.querySelectorAll('.text_code .count');

        // Ajoutez un gestionnaire d'événements de scroll à chaque textarea
        textareas.forEach((textarea, index) => {

            textarea.addEventListener('scroll', () => {
                // Récupérez la position de défilement verticale du textarea
                const scrollTop = textarea.scrollTop;
                // Appliquez la même position de défilement au count correspondant
                counts[index].scrollTop = scrollTop;
            });
        });
    }, []);

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

                <div className='text_code' data-anim="1">
                    <div className='count' id="count-active-0">
                        <p>1</p>
                    </div>
                    <div className='textarea' id='text-area-contenaire-0'>
                        <textarea id='textarea'></textarea>
                    </div>
                </div>

                <div className='text_code' data-anim="2">
                    <div className='count' id="count-active-1">
                        <p>1</p>
                    </div>
                    <div className='textarea' id='text-area-contenaire-1'>
                        <textarea id='textarea'></textarea>
                    </div>
                </div>

                <div className='text_code' data-anim="3">
                    <div className='count' id="count-active-2">
                        <p>1</p>
                    </div>
                    <div className='textarea' id='text-area-contenaire-2'>
                        <textarea id='textarea'></textarea>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contenaire;