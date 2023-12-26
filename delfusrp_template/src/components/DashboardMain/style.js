import styled from "styled-components";

export const StyleDashboardMain = styled.main`
  padding: 95px 0px;

  .StyleDashboardMain__section--image {
    width: 100%;
    opacity: 95%;
  }

  .StyleDashboardMain__section--divTitles {
    color: var(--grey-0);

    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;

    position: relative;
    top: -25vw;
    right: 5vw;
  }

  .StyleDashboardMain__section--divText {
    color: var(--grey-0);

    position: relative;
    top: -23vw;
    right: 5vw;
  }

  .StyleDashboardMain__section--divheaderimage {
    display: flex;
    flex-direction: row;
  }

  .StyleDashboardMain__section--divImagePerson {
    width: 50vw;
  }

  .StyleDashboardMain__section--h1Text {
    color: var(--grey-0);

    padding: 5px 20px;

    border-bottom: solid 2px var(--grey-0);
    border-top: solid 2px var(--grey-0);

    @import url("https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap");
    font-family: "Roboto", sans-serif;
    font-weight: 600;
    line-height: 5vw;
    font-size: 3vw;
  }

  .StyleDashboardMain__section2 {
    color: var(--grey-2);

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    position: relative;
    top: -17vw;

    padding: 0px 30px;

    gap: 30px;
  }

  .StyleDashboardMain__section2--person {
    background-color: var(--grey-0);

    -webkit-box-shadow: -2px 5px 5px -3px rgba(54, 52, 54, 1);
    -moz-box-shadow: -2px 5px 5px -3px rgba(54, 52, 54, 1);
    box-shadow: -2px 5px 5px -3px rgba(54, 52, 54, 1);

    display: flex;
    flex-direction: column;
    align-items: center;

    gap: 10px;

    border-radius: 15px;

    min-height: 300px;
    padding: 30px 25px;
    width: 50vw;
  }

  .StyleDashboardMain__section2--image {
    width: 85px;
  }

  .StyleDashboardMain__section2--text {
    width: 100%;
    text-align: center;

    line-height: 27px;

    margin-top: 40px;
  }

  .StyleDashboardMain__divDelfus {
    display: flex;
    justify-content: center;

    margin-bottom: 100px;
  }

  .StyleDashboardMain__delfusImage {
    width: 50vw;
  }

  .StyleDashboardMain__sectionWord {
    background-color: var(--grey-0);
    color: var(--grey-2);

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;

    gap: 30px;

    padding: 0px 30px;
  }

  .StyleDashboardMain__imageCity {
    border-radius: 15px;
    width: 80vw;
  }

  .StyleDashboardMain__divImageCity {
    margin-top: 30px;
    margin-bottom: 30px;
  }

  .StyleDashboardMain__divtextCity {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    gap: 20px;
  }

  .StyleDashboardMain__textCity {
    width: 40vw;
    line-height: 20px;
  }

  .testeDeCard {
    margin-top: 100px;
    margin-bottom: 100px;
  }

  .testeDeCard--divimage {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    height: 300px;

    gap: 40px;
  }

  .testeDeCard--divDaDivimage {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 270px;
    height: 360px;
  }

  .testeDeCard--image {
    width: 250px;
  }

  .testeDeCard--image:hover {
    width: 270px;
  }

  @media (min-width: 768px) {
    padding: 85px 0px;

    .StyleDashboardMain__divDelfus {
      position: relative;
      top: -11.5vw;

      margin-bottom: 0px;
    }

    .StyleDashboardMain__section2 {
      padding: 10px 10vw;
    }

    .StyleDashboardMain__sectionWord {
      padding: 10px 10vw;
      margin-top: -70px;
    }

    .StyleDashboardMain__imageCity {
      width: 450px;
    }

    .StyleDashboardMain__delfusImage {
      width: 300px;
    }

    .StyleDashboardMain__section2--person {
      width: 330px;
    }

    .StyleDashboardMain__section2--text {
      width: 330px;
    }
  }
`;
