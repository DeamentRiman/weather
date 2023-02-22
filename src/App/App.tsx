import React from 'react';
import './index.scss';
import Header from '../components/Header/index';
import Footer from '../components/Footer/index';

export const App:React.FC = () =>  {
    return (
        <div className="App">
            <Header/>
            <Footer/>
        </div>
    )
}

export default App;
