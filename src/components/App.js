import React from 'react';

import Header from '../components/Header'
import SecondaryInfo from '../components/SecondaryInfo'
import PrimaryInfo from '../components/PrimaryInfo'
import References from '../components/References'



function App() {
    return (
        <div className="content-container">
            <Header/>
            <main className="row">
                <SecondaryInfo/>
                <PrimaryInfo/>
            </main>
            <References/>
        </div>
    )
}

export {
    App,
};