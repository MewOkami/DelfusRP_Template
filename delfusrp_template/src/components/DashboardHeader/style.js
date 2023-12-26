import styled from "styled-components";

export const StyleDashboardHeader = styled.header`
  background-color: var(--grey-0);

  -webkit-box-shadow: 0px 5px 5px -3px rgba(102, 102, 102, 1);
  -moz-box-shadow: 0px 5px 5px -3px rgba(102, 102, 102, 1);
  box-shadow: 0px 5px 5px -3px rgba(102, 102, 102, 1);

  width: 100vw;

  position: fixed;

  z-index: 2;

  .StyleDashboardHeader__image {
    width: 25px;
  }

  .StyleDashboardHeader__container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    gap: 13px;

    padding: 10px 30px;
  }

  .StyleDashboardHeader__divContainerImage {
    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 15px;
  }

  .StyleDashboardHeader__divContainerImage--link {
    text-decoration: none;
    color: var(--color-secundary);
  }

  .StyleDashboardHeader__divContainerImage--link:hover {
    color: var(--color-primary);
  }

  .StyleDashboardHeader__divContainerImage--image {
    width: 40px;

    border-radius: 15%;
  }

  .StyleDashboardHeader__divContainerLinks {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .StyleDashboardHeader__divContainerLinks--links {
    color: var(--color-secundary);
    text-decoration: none;
  }

  .StyleDashboardHeader__divContainerLinks--links:hover {
    color: var(--color-primary);
  }

  @media (min-width: 768px) {
    .StyleDashboardHeader__container {
      padding: 10px 10vw;
    }
  }
`;
