import React from 'react';
import '../styles/index.scss'
import Header from '../components/Header';
import Contenaire from '../components/Contenaire';
import { IconFile, IconGitBranch } from '@tabler/icons-react';

const Home = () => {
    return (
        <>
            <Header />
            <Contenaire />
            <div className='top_side_bar'>
                <div className='git_branch'>
                    <IconGitBranch />
                    <p>master</p>
                </div>
                <div className='git_branch'>
                    <IconFile />
                    <p>Plain text</p>
                </div>
            </div>
        </>
    );
};

export default Home;