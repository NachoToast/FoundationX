import { ReactNode } from 'react';

const GameSection = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                width: '100%',
                display: 'flex',
                flexFlow: 'column nowrap',
            }}
        >
            {children}
        </div>
    );
};

export default GameSection;
