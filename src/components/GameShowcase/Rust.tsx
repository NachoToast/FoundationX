import sectionTop from '../../assets/SectionB.svg';
import GameSection from './GameSection';

const Rust = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <div style={{ backgroundColor: '#ce422b' }}>
                <h1>Rust</h1>
            </div>
        </GameSection>
    );
};

export default Rust;
