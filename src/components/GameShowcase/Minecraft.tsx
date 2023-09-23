import sectionTop from '../../assets/SectionC.svg';
import sectionBottom from '../../assets/SectionD.svg';
import GameSection from './GameSection';

const Minecraft = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <div style={{ backgroundColor: '#80ac40' }}>
                <h1>Minecraft</h1>
            </div>
            <img src={sectionBottom} style={{ width: '100%', height: 'auto' }} />
        </GameSection>
    );
};

export default Minecraft;
