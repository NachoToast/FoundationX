import './SiteFooter.css';
import githubLogo from '../assets/github/github-mark-white.svg';

const SiteFooter = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row wrap',
                padding: '16px',
                backgroundColor: '#272727a0',
                width: '100%',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <a href="https://github.com/NachoToast/FoundationX" id="github-link" target="_blank" title="Source Code">
                <span>Made by NachoToast</span>
                <img src={githubLogo} width={23} />
            </a>
        </div>
    );
};

export default SiteFooter;
