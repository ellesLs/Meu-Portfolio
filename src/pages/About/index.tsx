import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Area } from '../../components/Area';
import { GenericIcon } from '../../components/GenericIcon';
import { SocialIcons } from '../../components/SocialIcons';
import { AboutListIcons } from './components/AboutListIcons';

import otter from './otter.png';

import * as S from './About.styles';
import { containerVariants } from '../../Constants/containerVariants';

export function About() {
  return (
    <>
      <S.ContainerAbout
        key="about"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Area>
          <S.ContentAbout>
            <S.ContainerInfoAbout>
              <S.FigureAbout>
                <img src={otter} alt="" />
              </S.FigureAbout>
              <S.InfoAbout>
                <h2>Sobre mim</h2>
                <p>
                  Meu nome é <span>Elles do Nascimento Santana Desenvolvedor Front-End</span> Lorem
                  ipsum dolor sit amet consectetur adipisicing elit. Nam iste nobis hic explicabo
                  soluta debitis accusamus ad repellat corrupti voluptatem tempore, accusantium
                  labore!
                </p>
              </S.InfoAbout>
            </S.ContainerInfoAbout>
            <S.ContainerMediaSocial>
              <h3>Redes Sociais</h3>
              <SocialIcons>
                <GenericIcon
                  icon={<AiFillLinkedin />}
                  url={'https://www.linkedin.com/in/elles-do-nascimento-santana-a9728b240/'}
                />
                <GenericIcon icon={<AiFillGithub />} url={'https://github.com/ellesLs'} />
              </SocialIcons>
            </S.ContainerMediaSocial>
            <AboutListIcons />
          </S.ContentAbout>
        </Area>
      </S.ContainerAbout>
    </>
  );
}
