import logoAmongUs from '../../assets/community/among.png';
import logoCrabGame from '../../assets/community/crab.png';
import logoGarticPhone from '../../assets/community/gartic.png';
import logoRoblox from '../../assets/community/roblox.jpg';
import TextSection from './TextSection';

interface Logo {
    name: string;
    logo: string;
    link: string;
    styles?: React.CSSProperties;
}

const logos: Logo[] = [
    {
        name: 'Among Us',
        logo: logoAmongUs,
        link: 'https://store.steampowered.com/app/945360/Among_Us/',
    },
    {
        name: 'Crab Game',
        logo: logoCrabGame,
        link: 'https://store.steampowered.com/app/1782210/Crab_Game/',
        styles: {
            width: '256px',
            backgroundColor: 'white',
            padding: '4px',
            boxSizing: 'border-box',
        },
    },
    {
        name: 'Gartic Phone',
        logo: logoGarticPhone,
        link: 'https://garticphone.com/',
    },
    {
        name: 'Roblox',
        logo: logoRoblox,
        link: 'https://www.roblox.com/',
    },
];

// randomly shuffle array
logos.sort(() => Math.random() - 0.5);

const Community = () => {
    return (
        <TextSection>
            <h1>Community</h1>
            <p>Alongside the above, we also frequently have community game nights.</p>
            <div
                style={{
                    display: 'flex',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '2rem',
                }}
            >
                {logos.map((e, i) => (
                    <a href={e.link} target="_blank" rel="noreferrer" key={i} title={e.name}>
                        <img
                            src={e.logo}
                            alt={e.name}
                            style={{ width: '128px', height: '128px', borderRadius: '1em', ...e.styles }}
                        />
                    </a>
                ))}
            </div>
        </TextSection>
    );
};

export default Community;
