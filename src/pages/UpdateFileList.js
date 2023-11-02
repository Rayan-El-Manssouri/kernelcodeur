import React from 'react';

const UpdateFileList = () => {
    // Récupérer le paramètre 'result' de l'URL
    const urlParams = new URLSearchParams(window.location.search);
    const result = urlParams.get('result');

    return (
        <div id='result'>
            <p>{result}</p>
        </div>
    );
};

export default UpdateFileList;
