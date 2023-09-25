import sectionTop from '../../assets/SectionC.svg';
import sectionBottom from '../../assets/SectionD.svg';
import minecraftLogo from '../../assets/minecraft/logo.png';
import imageA from '../../assets/minecraft/placeholder.png';
import ImageSlideshow from '../ImageSlideshow';
import GameSection from './GameSection';
import GameSectionContent from './GameSectionContent';
import GameSectionInfo from './GameSectionInfo';

const Minecraft = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <GameSectionContent style={{ backgroundColor: '#6f9a3d' }}>
                <GameSectionInfo>
                    <img src={minecraftLogo} width="300px" />
                </GameSectionInfo>
                <ImageSlideshow imagesA={[imageA, imageA]} imagesB={[imageA, imageA]} />
            </GameSectionContent>
            <img src={sectionBottom} style={{ width: '100%', height: 'auto' }} />
        </GameSection>
    );
};

export default Minecraft;
