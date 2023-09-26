import { Area } from '../../components/Area';
import { ButtonLink } from '../../components/ButtonLink';
import { SocialIcons } from '../../components/SocialIcons';
import { GenericIcon } from '../../components/GenericIcon';
import { ClipBoardTooltip } from '../../components/ClipBoardTooltip';

import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

import images from './Images';

import * as S from './Home.styles';

export function Home() {
  const chosenImage = Math.floor(Math.random() * (images.length - 1));

  return (
    <>
      <S.ContainerHome
        initial={{ width: '100%', opacity: 0 }}
        animate={{ width: '100%', opacity: 1 }}
        exit={{ x: window.innerWidth, opacity: 0 }}
        transition={{ duration: 0.4, ease: 'backIn' }}
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
                  <ClipBoardTooltip>
                    <GenericIcon icon={<AiOutlineMail />} />
                  </ClipBoardTooltip>
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
