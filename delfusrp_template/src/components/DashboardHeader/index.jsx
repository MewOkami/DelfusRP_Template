import delfusLogo from "../../assets/pack.png";
import { StyleDashboardHeader } from "./style";

export const DashboardHeader = () => {
  return (
    <StyleDashboardHeader>
      <div className="StyleDashboardHeader__container">
        <div className="StyleDashboardHeader__divContainerImage">
          <img
            className="StyleDashboardHeader__divContainerImage--image"
            src={delfusLogo}
            alt=""
          />
          <div>
            <a
              target="blank"
              className="StyleDashboardHeader__divContainerImage--link"
              href="https://discord.gg/ZCkywA7thk"
            >
              DelfusRP
            </a>
          </div>
        </div>
        <div className="StyleDashboardHeader__divContainerLinks">
          <a className="StyleDashboardHeader__divContainerLinks--links" href="">
            Perfil
          </a>
          <a className="StyleDashboardHeader__divContainerLinks--links" href="">
            Compras
          </a>
          <a className="StyleDashboardHeader__divContainerLinks--links" href="">
            Avisos
          </a>
          <a className="StyleDashboardHeader__divContainerLinks--links" href="">
            Contato
          </a>
        </div>
      </div>
    </StyleDashboardHeader>
  );
};
