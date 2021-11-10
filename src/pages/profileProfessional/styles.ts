import styled from "styled-components";

export const ContainerProfessionalData = styled.div`
  background: linear-gradient(90deg, rgba(69, 36, 122, 0.87) 0%, #9677d9 100%);
  width: 100%;
  margin: auto;
  .ProfessionalData {
    max-width: 1280px;
    margin: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (min-width: 700px) {
      flex-direction: row;
      align-items: flex-start;
      text-align: start;
    }
    .img {
      width: 100%;
      height: 100%;
      max-width: 350px;
      display: flex;
      justify-content: center;
      img {
        width: 230px;
        height: 230px;
      }
    }
    .data {
      margin-bottom: 50px;
      padding: 5px;
      max-width: 600px;
      width: 100%;
      display: flex;
      gap: 30px;
      flex-direction: column;
      color: var(--gray200);
      div {
        flex-direction: column;
        svg {
          font-size: 20px;
          color: var(--yellow200);
        }
        span {
          font-size: 14px;
        }
      }
      .stars {
        display: flex;
        flex-direction: row;
        gap: 3px;
        margin-top: 5px;
        justify-content: center;
        @media (min-width: 700px) {
          justify-content: left;
        }
      }
    }
  }
`;

export const Calendar = styled.div`
  width: 100%;
  padding-top: 30px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .tittle {
    width: 100%;
    max-width: 770px;
    height: 70px;
    background-color: var(--purple300);
    font-size: 28px;
    font-weight: lighter;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .container {
    width: 100%;
    max-width: 770px;
    display: flex;
    overflow-x: scroll;
    @media (min-width: 770px) {
      overflow-x: unset;
    }
  }
  .week {
  }
  .day {
    height: 70px;
    width: 110px;
    background-color: var(--purple400);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
  }
  .times {
    width: 110px;
    height: 485px;
    background-color: var(--gray50);
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .time {
    width: 90px;
    height: 50px;
    background-color: white;
    border-radius: 10px;
    margin: 5px 0;
  }
`;

export const Coment = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-bottom: 30px;
  .containerComent {
    display: grid;
    flex-wrap: wrap;
    justify-content: space-between;
    grid-template-columns: 1fr;
    gap: 20px;
    @media (min-width: 700px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1000px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export const Line = styled.div`
  width: 80%;
  border-top: 3px solid var(--purple300);
  margin: 20px auto;
  padding: 20px;
`;