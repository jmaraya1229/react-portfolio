import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';


export default function Container() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if (currentPage === 'About') {
            return <About />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Projects />;
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
            <Footer />
        </div>
    )
}