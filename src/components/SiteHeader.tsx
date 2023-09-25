import siteLogo from '../assets/logo.png';
import './SiteHeader.css';

const SiteHeader = () => {
    return (
        <div
            style={{
                width: '100%',
                padding: '16px',
                display: 'flex',
                justifyContent: 'center',
            }}
        >
            <img src={siteLogo} style={{ height: '100px', userSelect: 'none' }} />
            <a id="discord-join-button" href="https://discord.gg/FoundationX" target="_blank">
                <i className="fa-brands fa-xl fa-discord"></i>
                <span>Join our Discord!</span>
            </a>
        </div>
    );
};

export default SiteHeader;
