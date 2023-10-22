import React from 'react';
import '../styles/index.scss'
import Header from '../components/Header';
import Contenaire from '../components/Contenaire';
import { IconGitBranch } from '@tabler/icons-react';
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
            </div>
        </>
    );
};

export default Home;