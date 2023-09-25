import React, { ReactNode } from 'react';

const GameSectionInfo = ({ children, style }: { children: ReactNode; style?: React.CSSProperties }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'row nowrap',
                justifyContent: 'center',
                gap: '2rem',
                paddingBottom: '1rem',
                ...style,
            }}
        >
            {children}
        </div>
    );
};

export default GameSectionInfo;
