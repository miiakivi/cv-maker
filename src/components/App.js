import React from 'react';

import Header from './header/Header'
import Sidebar from './sideBar/Sidebar'
import History from './history/History'
import Footer from './footer/Footer'



function App() {
    return (
        <div className="content-container">
            <Header/>
            <main className="row">
                <Sidebar/>
                <History/>
            </main>
            <Footer/>
        </div>
    )
}

export {
    App,
};