import styled from "styled-components";

export const CartStyle = styled.div`
  .cart-co {
    position: absolute;
    padding: 10px 0px;
    left: 150px;
    top: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 1260px;
    height: auto;
    margin-left: 50px;
    /* margin-top: -20px; */
    h1 {
      font-weight: 700;
      font-size: 32px;
      font-family: "Raleway";
      color: #1d1f22;
    }
    .order {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 16px;
      width: 279px;
      margin-top: 15px;
      p {
        font-family: "Raleway";
        font-weight: 400;
        font-size: 24px;
        color: #1d1f22;
        margin-bottom: -22px;
        span {
          font-family: "Raleway";
          font-weight: 700;
          font-size: 24px;
          color: #1d1f22;
        }
      }
      .total {
        font-family: "Raleway";
        font-weight: 700;
        font-size: 24px;
        color: #1d1f22;
        margin-bottom: -22px;
        span {
          font-family: "Raleway";
          font-weight: 700;
          font-size: 24px;
          color: #1d1f22;
        }
      }
      .order-btn {
        font-family: "Raleway";
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 279px;
        height: 43px;
        background: #5ece7b;
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 120%;
        text-transform: uppercase;
        color: #ffffff;
        border: none;
        margin-top: 12px;
        cursor: pointer;
      }
    }
  }
  .productCart {
    border-bottom: #e5e5e5 solid 1px;
    border-top: #e5e5e5 solid 1px;
    /* padding: 5px; */
    width: 1230px;
    height: 400px;
    display: flex;
    .product-info {
      align-items: flex-start;
      margin-right: 650px;
      h2 {
        margin: 16px 0px;
        color: #1d1f22;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        font-family: "Raleway";
        line-height: 27px;
      }
      h3 {
        /* margin-top: -5px; */
        margin: 16px 0px;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        font-family: "Raleway";
        line-height: 27px;
        color: #1d1f22;
      }
      .price {
        margin: 16px 0px;
        span {
          font-family: "Raleway";
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          color: #1d1f22;
        }
      }
      .attributes {
        display: flex;
        flex-direction: column;
        width: 300px;
        margin: 14px 0px;
        .size {
          display: flex;
          flex-direction: column;
          margin-top: -8px;
          h4 {
            margin: 5px 0px;
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #1d1f22;
            text-transform: uppercase;
          }
          .size-box {
            display: flex;
            margin: 4px 0px;
            .size-x {
              font-family: "Source Sans Pro";
              border: 1px solid #1d1f22;
              width: 63px;
              height: 45px;
              margin: 2px 0px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
            .selected {
              background-color: #1d1f22;
              color: #ffffff;
            }
          }
        }
        .color {
          display: flex;
          flex-direction: column;
          /* margin-top: -8px; */

          h4 {
            text-transform: uppercase;
            font-family: "Roboto Condensed";
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #1d1f22;
          }
          .color-box {
            display: flex;
            .color-x {
              border: #1d1f22 solid 1px;
              width: 32px;
              height: 32px;
              background-color: rgba(15, 100, 80, 1);
              margin: 2px 0px;
              cursor: pointer;
            }
            .selected {
              border: #5ece7b solid 3px;
            }
          }
        }
      }
    }
    .product-count {
      padding: 5px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin-right: 24px;
      /* height: 288px; */
      width: 45px;
      .increse {
        width: 45px;
        height: 45px;
        cursor: pointer;
      }
      span {
        font-weight: 500;
        font-size: 24px;
      }
      .decrese {
        width: 45px;
        height: 45px;
        cursor: pointer;
      }
    }
    .pro-img {
      display: flex;
      justify-content: center;
      align-items: center;
      height: auto;
      width: 210px;
      padding: 0px 3px;
      position: relative;
      .product-img {
        object-fit: scale-down;
        width: 100%;
        height: 288px;
      }
      .changing-box {
        position: absolute;
        right: 18px;
        bottom: 78px;
        display: flex;
        gap: 8px;
        width: 56px;
        height: 24px;
        .prev {
          cursor: pointer;
        }
        .after {
          cursor: pointer;
        }
      }
    }
  }
`;
