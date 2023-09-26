import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Area } from '../../components/Area';
import { GenericIcon } from '../../components/GenericIcon';
import { SocialIcons } from '../../components/SocialIcons';
import { AboutListIcons } from './components/AboutListIcons';

import otter from './otter.png';

import * as S from './About.styles';

export function About() {
  return (
    <>
      <S.ContainerAbout
        initial={{ width: '100%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ x: window.innerWidth, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'backIn' }}
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
                  labore, quae ullam quo eos repudiandae praesentium quis!
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
