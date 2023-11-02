import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./pages/Home'));
const UpdateFileList = lazy(() => import('./pages/UpdateFileList'));

const App = () => {
    return (
        <BrowserRouter>
            <Suspense fallback={<div>La page se charge ...</div>}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/updateFileList" element={<UpdateFileList />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
};

export default App;