import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './index.css';
import './makeBackgroundCanvas';
import GameShowcase from './components/GameShowcase';
import SiteFooter from './components/SiteFooter';
import SiteHeader from './components/SiteHeader';
import TextShowcase from './components/TextShowcase';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <SiteHeader />
        <GameShowcase />
        <TextShowcase />
        <SiteFooter />
    </React.StrictMode>,
);
