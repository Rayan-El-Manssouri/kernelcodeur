import React, { useEffect } from 'react';
import { useState } from 'react';

const TextCode = (props, value) => {
    const [isActive] = useState(props.className === "active");
    const [lineNumber, setLineNumber] = useState(1);

    function CursorMove() {
        const borderCursor = document.getElementById(`border-cursor-${index}`);
        const countElement = document.getElementById(`count-active-${IndexMoins}`).querySelector("p.active");
        borderCursor.style.display = "block";
        borderCursor.style.position = "fixed";
        borderCursor.style.top = countElement.getBoundingClientRect().y + "px";
    }

    const [activeLine, setActiveLine] = useState(1);
    const [valeurTextarea, setValeurTextarea] = useState(props.value);
    let index = props.TextRef;
    if (index == null) {
        index = 1
    }
    const IndexMoins = index - 1;

    function resize() {
        const countElements = document.getElementById(`count-active-${IndexMoins}`);
        if (countElements == null) {
            return;
        }
        const TextArea = document.getElementById(`text-area-contenaire-${IndexMoins}`);
        const TextArea_code_ = document.getElementById(`TextArea_code_${index}`);
        const height = window.innerHeight - 103
        countElements.style.height = height + 'px'
        TextArea.style.height = height + 'px'
        TextArea_code_.style.height = height + 'px'
    }

    resize()

    window.addEventListener('resize', resize)

    const handleTextareaChange = (event) => {

        const textarea = document.getElementById(`text-area-${index}`);
        const count = document.getElementById(`count-active-${IndexMoins}`);

        textarea.addEventListener('scroll', function () {
            count.scrollTop = textarea.scrollTop;
            CursorMove()
        });
        CursorMove()

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
    });

    const myClass = isActive ? ' active' : '';

    return (
        <div className={'text_code' + myClass} data-anim={index} id={`TextArea_code_${index}`}>
            <div className='bordure_cursor' id={`border-cursor-${index}`} ></div>
            <div className='count' id={`count-active-${IndexMoins}`}>
                <div className='count-sections' id={`count-section-bordure-${index}`}>
                    {/* Numération */}
                    {[...Array(lineNumber)].map((_, index) => (
                        <div className='count-separator'>
                            <p key={index} id="line-number-contenaire-" className={index + 1 === activeLine ? 'active' : ''}>{index + 1}</p>
                        </div>
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