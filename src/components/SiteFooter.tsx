import './SiteFooter.css';

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
                <i className="fa-brands fa-github fa-xl" />
            </a>
        </div>
    );
};

export default SiteFooter;
