import { Area } from '../../components/Area';
import { ButtonLink } from '../../components/ButtonLink';
import { SocialIcons } from '../../components/SocialIcons';
import { GenericIcon } from '../../components/GenericIcon';
import { TooltipWithClipBoard } from '../../components/TooltipWithClipBoard';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import { containerVariants } from '../../Constants/containerVariants';
import images from './Images';

import * as S from './Home.styles';

export function Home() {
  const chosenImage = Math.floor(Math.random() * (images.length - 1));

  return (
    <>
      <S.ContainerHome
        key="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <Area>
          <S.ContentHome>
            <S.InfoHome>
              <h1>
                Ola, eu sou o<strong>Elles</strong>
              </h1>
              <p>
                Desenvolvedor <span>Front-End</span>
              </p>
              <S.ContainerLinks>
                <ButtonLink download={false} url="/Curriculo- Elles2.pdf">
                  Download CV
                </ButtonLink>
                <SocialIcons>
                  <GenericIcon
                    icon={<AiFillLinkedin />}
                    url={'https://www.linkedin.com/in/elles-do-nascimento-santana-a9728b240/'}
                  />
                  <GenericIcon icon={<AiFillGithub />} url={'https://github.com/ellesLs'} />
                  <TooltipWithClipBoard>
                    <GenericIcon icon={<AiOutlineMail />} />
                  </TooltipWithClipBoard>
                </SocialIcons>
              </S.ContainerLinks>
            </S.InfoHome>
            <S.FigureHome>
              <img src={images[chosenImage]} alt="Banner Image" title="banner" />
            </S.FigureHome>
          </S.ContentHome>
        </Area>
      </S.ContainerHome>
    </>
  );
}
