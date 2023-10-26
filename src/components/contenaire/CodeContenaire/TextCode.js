import React from 'react';
import { useState } from 'react';

const TextCode = (props) => {
    const [lineNumber, setLineNumber] = useState(1);
    const [activeLine, setActiveLine] = useState(1); // Nouvel état pour la ligne active
    const [valeurTextarea, setValeurTextarea] = useState("1");


    const index = props.TextRef;
    const IndexMoins = index - 1;

    function resize() {
        const countElements = document.getElementById(`count-active-${IndexMoins}`);
        const height = window.innerHeight - 103
        countElements.style.height = height + 'px'
    }

    window.addEventListener('resize', resize)

    const handleTextareaChange = (event) => {
        const textarea = document.getElementById(`text-area-${IndexMoins}`);
        const count = document.getElementById(`count-active-${IndexMoins}`);

        textarea.addEventListener('scroll', function () {
            count.scrollTop = textarea.scrollTop;
        });

        const lines = event.target.value.split('\n');
        setLineNumber(lines.length);
    };

    function handleTextareaChangeValue(event) {
        const textarea = event.target;
        const lines = textarea.value.substr(0, textarea.selectionStart).split('\n');
        handleTextareaChange(event)
        setActiveLine(lines.length);
        setValeurTextarea(event.target.value);
    }

    return (
        <div className='text_code' data-anim={index}>
            {/* Numération */}
            <div className='count' id={`count-active-${IndexMoins}`}>
                {[...Array(lineNumber)].map((_, index) => (
                    <p key={index} className={index + 1 === activeLine ? 'active' : ''}>{index + 1}</p>
                ))}
            </div>
            <div className='textarea' id={`text-area-contenaire-${IndexMoins}`}>
                <textarea
                    spellCheck="false"
                    onChange={handleTextareaChangeValue}
                    onKeyUp={handleTextareaChangeValue}
                    onKeyDown={handleTextareaChangeValue}
                    value={valeurTextarea}
                    id={`text-area-${IndexMoins}`}>
                </textarea>
            </div>
        </div>
    );
};

export default TextCode;