import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

import { Wrapper } from '../../components/Wrapper';
import { GenericIcon } from '../../components/GenericIcon';
import { SocialIcons } from '../../components/SocialIcons';
import { AboutListIcons } from './components/AboutListIcons';

import { containerVariants } from '../../constants/variants';
import { images } from './images';

import * as S from './About.styles';

export function About() {
  return (
    <S.ContainerAbout variants={containerVariants} initial="hidden" animate="visible" exit="exit">
      <Wrapper>
        <S.ContentAbout>
          <h2>Sobre mim</h2>
          <S.ContainerInfoAbout>
            <S.FigureAbout>
              <img
                alt="Minha Imagem de Perfil"
                src={images.large}
                srcSet={`${images.small} 375w, ${images.medium} 768w, `}
              />
            </S.FigureAbout>
            <S.InfoAbout>
              <p>
                Ola, meu nome é <span>Elles do Nascimento Santana</span>, sou formado em Tecnólogo
                em Analise e desenvolvimento de Sistemas por EAD pela Uninter, tenho um curso de
                técnico de TI pelo Pronatec e já passei um bom tempo estudando programação pela
                plataforma da Devmedia. Sempre gostei muito da área de TI por isso gosto de consumir
                artigos, blogs, documentações e vídeos sobre programação e suas tecnologias.
              </p>
              <p>
                Estou em busca de trabalhar na área de TI a alguns anos principalmente como
                desenvolvedor web Front-end, estudo programação a algum tempo, focado nisso desde
                meados de 2022 e já tenho conhecimentos em HTML, CSS, JavaScript, React com foco
                futuro em dominar um Framework e conseguir me tornar um desenvolvedor melhor que
                consegue resolver os problemas que vierem a aparecer com as melhores praticas
                possiveis.
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
      </Wrapper>
    </S.ContainerAbout>
  );
}
