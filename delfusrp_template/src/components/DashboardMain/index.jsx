import estantes from "../../assets/estantes2.png";
import cavalo from "../../assets/asas.png";
import npc from "../../assets/npc.png";
import espadinha from "../../assets/espadinha.png";
import pika from "../../assets/pika.png";
import delfusLogo from "../../assets/delfusLogo.png";
import nahau from "../../assets/nahau.png";
import { StyleDashboardMain } from "./style";
import { cards } from "../../data/cards";

export const DashboardMain = () => {
  return (
    <StyleDashboardMain>
      <section className="StyleDashboardMain__section">
        <div className="StyleDashboardMain__section--divImage">
          <img
            className="StyleDashboardMain__section--image"
            src={estantes}
            alt=""
          />

          <div className="StyleDashboardMain__section--divheaderimage">
            <div className="StyleDashboardMain__section--divTitles">
              <img
                className="StyleDashboardMain__section--divImagePerson"
                src={cavalo}
                alt=""
              />
            </div>
            <div className="StyleDashboardMain__section--divText">
              <h1 className="StyleDashboardMain__section--h1Text">
                Entre nesse facinante mundo e construa sua historia
              </h1>
            </div>
          </div>
        </div>
      </section>

      <section className="StyleDashboardMain__section2">
        <div className="StyleDashboardMain__section2--person">
          <img
            className="StyleDashboardMain__section2--image"
            src={espadinha}
            alt=""
          />
          <h3>Personagem</h3>
          <p className="StyleDashboardMain__section2--text">
            Nesse mundo seu personagem é livre para seguir seu proprio caminho,
            explore dungeons, desertos e mares, evolua e fique mais forte para
            lutar contra os perigos desse mundo.
          </p>
        </div>
        <div className="StyleDashboardMain__section2--person">
          <img
            className="StyleDashboardMain__section2--image"
            src={pika}
            alt=""
          />
          <h3>RP</h3>
          <p className="StyleDashboardMain__section2--text">
            Nosso jogo tem como foco o RP então sinta-se livre para criar sua
            historia como desejar, lembrando sempre de que o RP é fundamental
            para o jogo então tente sempre se manter dentro dele.
          </p>
        </div>
        <div className="StyleDashboardMain__section2--person">
          <img
            className="StyleDashboardMain__section2--image"
            src={npc}
            alt=""
          />
          <h3>Sistemas</h3>
          <p className="StyleDashboardMain__section2--text">
            Nosso server conta com sistemas de Pluggins, mods e NPCS para
            missões e algumas logisticas, no entando como o foco é RP os NPCS
            foram criados mais para a imersão e mecanicas na qual players não
            conseguem executar.
          </p>
        </div>
      </section>

      <div className="StyleDashboardMain__divDelfus">
        <img
          className="StyleDashboardMain__delfusImage"
          src={delfusLogo}
          alt=""
        />
      </div>

      <section className="StyleDashboardMain__sectionWord">
        <div className="StyleDashboardMain__divImageCity">
          <img className="StyleDashboardMain__imageCity" src={nahau} alt="" />
        </div>
        <div className="StyleDashboardMain__divtextCity">
          <h2>O mundo</h2>
          <p className="StyleDashboardMain__textCity">
            ✪ A terra era o planeta mais tranquilo e seguro que existia, todas
            as raças viviam com paz e harmonia. Em uma noite, uma mina de anões
            ecoou um estrondo, de repente os anões que trabalhavam lá correram
            em desespero, atrás deles terríveis monstros corriam para fora da
            mina. A Partir daquele dia o mundo foi condenado e infestado de
            terríveis criaturas. Em desespero as raças fizeram o possível para
            se manterem vivas, infelizmente muitas vidas foram perdidas, e com
            tantas mortes acontecendo 7 dos maiores magos se uniram para
            realizar um feitiço, fizeram cidades para abrigar todos os
            sobreviventes e com uma poderosa magia movendo-as do chão para o
            céu, onde os sobreviventes pudessem permanecer mais seguros. Com
            ajuda de grandes e fortes cristais, as cidades se mantiveram no ar
            por longos e dolorosos anos
          </p>
          <p></p>
        </div>
      </section>

      <section className="testeDeCard">
        <div className="testeDeCard--divimage">
          {cards.map((card) => (
            <div className="testeDeCard--divDaDivimage">
              <img className="testeDeCard--image" src={card.url} alt="" />
            </div>
          ))}
          {/* <img className="testeDeCard--image" src={gif1} alt="" />
          <img className="testeDeCard--image" src={gif2} alt="" />
          <img className="testeDeCard--image" src={gif3} alt="" /> */}
        </div>
      </section>
    </StyleDashboardMain>
  );
};
