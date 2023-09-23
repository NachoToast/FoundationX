import { ReactNode } from 'react';

const TextSection = ({ children }: { children: ReactNode }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexFlow: 'column nowrap',
                alignItems: 'center',
            }}
        >
            {children}
        </div>
    );
};

export default TextSection;
