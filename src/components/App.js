import React from 'react';

import Header from './header/Header'
import Sidebar from './sideBar/Sidebar'
import PrimaryInfo from '../components/PrimaryInfo'
import References from '../components/References'



function App() {
    return (
        <div className="content-container">
            <Header/>
            <main className="row">
                <Sidebar/>
                <PrimaryInfo/>
            </main>
            <References/>
        </div>
    )
}

export {
    App,
};