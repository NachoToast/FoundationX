import siteLogo from '../assets/logo.png';

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
        </div>
    );
};

export default SiteHeader;
