import { ReactNode } from 'react';

const GameSectionContent = ({ children, style }: { children: ReactNode; style: React.CSSProperties }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                padding: '0 2rem',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default GameSectionContent;
