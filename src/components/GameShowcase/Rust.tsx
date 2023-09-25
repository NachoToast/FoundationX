import sectionTop from '../../assets/SectionB.svg';
import rustLogo from '../../assets/rust/logo.png';
import imageA from '../../assets/rust/placeholder.jpg';
import ImageSlideshow from '../ImageSlideshow';
import GameSection from './GameSection';
import GameSectionContent from './GameSectionContent';
import GameSectionInfo from './GameSectionInfo';

const Rust = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <GameSectionContent style={{ backgroundColor: '#1e2020' }}>
                <GameSectionInfo>
                    <img src={rustLogo} width="256px" style={{ marginLeft: '-1.5rem' }} />
                </GameSectionInfo>
                <ImageSlideshow imagesA={[imageA, imageA]} imagesB={[imageA, imageA]} />
            </GameSectionContent>
        </GameSection>
    );
};

export default Rust;
