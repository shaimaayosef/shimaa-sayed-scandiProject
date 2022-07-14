import styled from "styled-components";

export const CardStyel = styled.div`
  .CardContainer {
    margin-top: 10px;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 80px;
    background: #ffffff;
    .title {
      width: 299px;
      height: 68px;
      left: calc(50% - 299px / 2 - 469.5px);
      top: calc(50% - 68px / 2 - 562.5px);
      display: flex;
      align-items: center;
      margin-top: 80px;
      margin-left: 101px;
      margin-bottom: 103px;
      h2 {
        font-style: normal;
        font-weight: 400;
        font-size: 42px;
        line-height: 160%;
        text-transform: uppercase;
      }
    }
    .cardsDiv {
      width: 1238 px;
      margin-left: 100px;
      margin-right: 100px;
      margin-bottom: 271px;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }
  }
  .pro-card {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 16px;
    width: 386px;
    height: 444px;
    left: calc(50% - 386px / 2 - 427px);
    bottom: 738px;
    cursor: pointer;
    .product-img {
      width: 383px;
      height: 330px;
    }
    .cart-badge {
      background: #5ece7b;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      text-align: center;
      margin-top: -26px;
      margin-left: 310px;

      .c-img {
        margin-left: 12px;
        img {
          width: 30px;
          height: 30px;
          color: rgb(255, 255, 255);
        }
      }
    }
    .product-name {
      font-size: 18px;
      margin-bottom: -13px;
      color: rgb(51, 53, 55);
    }
    .price {
      margin-top: 20px;
      margin-bottom: -10px;
      font-weight: 600;
      font-size: 18px;
      text-align: right;
      color: #1d1f22;
    }
  }
`;
