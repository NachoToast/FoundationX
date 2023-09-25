import { ReactNode } from 'react';
import TextSection from './TextSection';

interface JoinButton {
    href: string;
    title: string;
    icon: ReactNode;
    backgroundColor: string;
    color: string;
}

const buttons: JoinButton[] = [
    {
        href: 'https://www.patreon.com/FoundationX',
        title: 'Patreon',
        icon: <i className="fa-brands fa-patreon fa-6x"></i>,
        backgroundColor: '#f96854',
        color: 'white',
    },
    {
        href: 'https://discord.gg/FoundationX',
        title: 'Discord',
        icon: <i className="fa-brands fa-discord fa-6x"></i>,
        backgroundColor: '#7289da',
        color: 'white',
    },
];

const GetInTouch = () => {
    return (
        <TextSection>
            <h1>Get Involved</h1>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    flexFlow: 'row wrap',
                    justifyContent: 'center',
                    gap: '2rem',
                    marginBottom: '10rem',
                }}
            >
                {buttons.map((e, i) => (
                    <a
                        key={i}
                        href={e.href}
                        title={e.title}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                            width: '128px',
                            height: '128px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: '1em',
                            backgroundColor: e.backgroundColor,
                            color: e.color,
                        }}
                    >
                        <span>{e.icon}</span>
                    </a>
                ))}
            </div>
        </TextSection>
    );
};

export default GetInTouch;
