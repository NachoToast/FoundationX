import sectionTop from '../../assets/SectionA.svg';
import GameSection from './GameSection';

const SecretLab = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <div style={{ backgroundColor: '#3f48cc' }}>
                <h1>SCP: Secret Lab</h1>
            </div>
        </GameSection>
    );
};

export default SecretLab;
