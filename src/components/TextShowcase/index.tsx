import Community from './Community';
import GetInTouch from './GetInTouch';
import Team from './Team';

const TextShowcase = () => {
    return (
        <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '100px', margin: '50px 0' }}>
            <Community />
            <Team />
            <GetInTouch />
        </div>
    );
};

export default TextShowcase;
