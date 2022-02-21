import React, {useState, lazy, Suspense} from 'react';

const Header = lazy(() => import(`./header/Header`));
const Sidebar = lazy(() =>import(`./sideBar/Sidebar`));
const History = lazy(() => import(`./history/History`));
const Footer = lazy(() => import(`./footer/Footer`));

import Navigation from "./navigation/Navigation";

function App() {
    const [globalEditingModeOn, setGlobalEditingMode] = useState('true');

    return (
        <div className="content">
            <Navigation setGlobalEditingMode={setGlobalEditingMode}/>
            <div id="cv-content" className="content-container">
                <Suspense fallback={<div>Loading...</div>}>
                    <Header globalEditingMode={globalEditingModeOn}/>
                    <main className="row">
                        <Sidebar globalEditingMode={globalEditingModeOn}/>
                        <History globalEditingMode={globalEditingModeOn}/>
                    </main>
                    <Footer globalEditingMode={globalEditingModeOn}/>
                </Suspense>
            </div>
        </div>
    )
}

export {
    App,
};