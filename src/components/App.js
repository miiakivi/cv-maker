import React, {useState} from 'react';

import Header from './header/Header'
import Sidebar from './sideBar/Sidebar'
import History from './history/History'
import Footer from './footer/Footer'
import Navigation from "./navigation/Navigation";


function App() {
    const [globalEditingModeOn, setGlobalEditingMode] = useState('true');

    return (
        <div className="content">
            <Navigation setGlobalEditingMode={setGlobalEditingMode}/>
            <div id="cv-content" className="content-container">
                <Header globalEditingMode={globalEditingModeOn}/>
                <main className="row">
                    <Sidebar globalEditingMode={globalEditingModeOn}/>
                    <History globalEditingMode={globalEditingModeOn}/>
                </main>
                <Footer globalEditingMode={globalEditingModeOn}/>
            </div>
        </div>
    )
}

export {
    App,
};