import React, { useEffect } from 'react';
import { useState } from 'react';

const TextCode = (props) => {
    const [isActive] = useState(props.className === "active");
    const [lineNumber, setLineNumber] = useState(1);
    const [activeLine, setActiveLine] = useState(1);
    const [valeurTextarea, setValeurTextarea] = useState("");
    const index = props.TextRef;
    const IndexMoins = index - 1;

    function CursorMove() {
        const borderCursor = document.getElementById(`border-cursor-${index}`);
        const countElement = document.getElementById(`count-section-bordure-${index}`).querySelector("p.active");
        borderCursor.style.display = "flex";
        borderCursor.style.position = "fixed";
        borderCursor.style.top = countElement.getBoundingClientRect().y + "px";
        borderCursor.style.left = countElement.offsetLeft + "px";
    }

    function resize() {
        const countElements = document.getElementById(`count-section-bordure-${index}`);
        const height = window.innerHeight - 103
        countElements.style.height = height + 'px'
    }

    window.addEventListener('resize', resize)

    const handleTextareaChange = (event) => {
        const textarea = document.getElementById(`text-area-${index}`);
        const count = document.getElementById(`count-section-bordure-${index}`);

        textarea.addEventListener('scroll', function () {
            CursorMove()
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

    useEffect(() => {
        CursorMove()

    }, [activeLine]);

    const myClass = isActive ? ' active' : '';

    return (
        <div className={'text_code' + myClass} data-anim={index}>
            <div className='bordure_cursor' id={`border-cursor-${index}`} ></div>
            <div className='count' id={`count-active-${IndexMoins}`}>
                <div className='count' id={`count-section-bordure-${index}`}>
                    {/* Numération */}
                    {[...Array(lineNumber)].map((_, index) => (
                        <p key={index} id="line-number-contenaire-" className={index + 1 === activeLine ? 'active' : ''}>{index + 1}</p>
                    ))}
                </div>
            </div>
            <div className='textarea' id={`text-area-contenaire-${IndexMoins}`}>
                <textarea
                    spellCheck="false"
                    onInput={handleTextareaChangeValue}
                    onChange={handleTextareaChangeValue}
                    onKeyUp={handleTextareaChangeValue}
                    onKeyDown={handleTextareaChangeValue}
                    onClick={handleTextareaChangeValue}
                    value={valeurTextarea}
                    id={`text-area-${index}`}
                    autoFocus
                >
                </textarea>
            </div>
        </div>
    );
};

export default TextCode;