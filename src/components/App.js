import React, {useState} from 'react';

import Header from './header/Header'
import Sidebar from './sideBar/Sidebar'
import History from './history/History'
import Footer from './footer/Footer'
import SideNavBar from "./navBar/SideNavBar";

const yellowTheme = {
    "--main-accent-clr": "#FFC914",
    "--dark-accent-clr": "#fd5e30",
    "--title-clr": "#FF7F51",
    "--header-font-clr": "#44423f"
}

const blueTheme = {
    "--main-accent-clr": "#2c699a",
    "--dark-accent-clr": "#457b9d",
    "--title-clr": "#219ebc",
    "--header-font-clr": "#e5e5e5"
}



function App() {
    const [currentTheme, setTheme] = useState("yellow");



    return (
        <div className="content">
            <SideNavBar themeUpdater={setTheme}/>
            <div className="content-container">
                <Header/>
                <main className="row">
                    <Sidebar/>
                    <History/>
                </main>
                <Footer/>
            </div>

        </div>
    )
}

export {
    App,
};