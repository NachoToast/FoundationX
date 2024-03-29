import sectionTop from '../../assets/SectionA.svg';
import imageA from '../../assets/secretLab/20230925151458_1.jpg';
import imageB from '../../assets/secretLab/20230925151509_1.jpg';
import imageC from '../../assets/secretLab/20230925151620_1.jpg';
import imageD from '../../assets/secretLab/20230925155035_1.jpg';
import imageI from '../../assets/secretLab/half_life.png';
import imageG from '../../assets/secretLab/jordy.png';
import imageF from '../../assets/secretLab/jumpergum.png';
import imageH from '../../assets/secretLab/jumpergum2.png';
import secretLabLogo from '../../assets/secretLab/logo.png';
import imageE from '../../assets/secretLab/nathan.png';
import ImageSlideshow from '../ImageSlideshow';
import GameSection from './GameSection';
import GameSectionContent from './GameSectionContent';
import GameSectionInfo from './GameSectionInfo';

const SecretLab = () => {
    return (
        <GameSection>
            <img src={sectionTop} style={{ width: '100%', height: 'auto' }} />
            <GameSectionContent
                style={{
                    backgroundColor: '#3f48cc',
                }}
            >
                <GameSectionInfo>
                    <img src={secretLabLogo} width="128px" />
                </GameSectionInfo>
                <ImageSlideshow
                    imagesA={[imageI, imageG, imageE, imageA, imageB]}
                    imagesB={[imageH, imageF, imageC, imageD]}
                />
            </GameSectionContent>
            <img src={sectionTop} style={{ width: '100%', height: 'auto', transform: 'scaleY(-1) scaleX(-1)' }} />
        </GameSection>
    );
};

export default SecretLab;
