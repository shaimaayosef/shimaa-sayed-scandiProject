import styled from "styled-components";

export const CartOverlayStyel = styled.div`
  z-index: 10;
  position: absolute;
  left: 30px;
  top: 65px;

  .cart-overlay {
    position: absolute;
    width: 325px;
    left: 1043px;
    top: 10px;
    background: #ffffff;
    padding: 10px;
    h3 {
      font-weight: 700;
      font-size: 16px;
      span {
        font-weight: 500;
      }
    }
    p {
      font-weight: 700;
      font-size: 16px;
    }
    .ptn {
      display: flex;

      .view-ptn {
        font-family: "Raleway";
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 140px;
        height: 43px;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        background: #ffffff;
        color: #0c0c0c;
        margin: 8px;
        //   margin-top: 12px;
        cursor: pointer;
      }
      .check-ptn {
        font-family: "Raleway";
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 140px;
        height: 43px;
        background: #5ece7b;
        font-weight: 400;
        font-size: 14px;
        line-height: 120%;
        text-transform: uppercase;
        color: #ffffff;
        border: none;
        margin: 8px;
        //   margin-top: 12px;
        cursor: pointer;
      }
    }
  }
`;
export const CartItemStyel = styled.div`
  .cart-item {
    padding: 5px;
    width: 293px;
    height: 200px;
    display: flex;
    .product-info {
      margin-right: 20px;
      h2 {
        color: #1d1f22;
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
      }
      .price {
        margin-top: -15px;
        display: flex;
        flex-direction: column;

        span {
          font-style: normal;
          font-weight: 500;
          font-size: 16px;
          color: #1d1f22;
        }
      }
      .attributes {
        display: flex;
        flex-direction: column;
        width: 130px;
        .size {
          display: flex;
          flex-direction: column;
          margin-top: -8px;
          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #1d1f22;
          }
          .size-box {
            display: flex;
            margin-top: -20px;
            .size-x {
              border: 1px solid #1d1f22;
              width: 33px;
              height: 24px;
              margin: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              text-transform: uppercase;
              font-size: 14px;
              font-weight: 400;
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
          margin-top: -8px;

          h4 {
            font-style: normal;
            font-weight: 400;
            font-size: 14px;
            color: #1d1f22;
          }
          .color-box {
            display: flex;
            margin-top: -20px;
            .color-x {
              border: #1d1f22 solid 1px;
              width: 16px;
              height: 16px;
              background-color: rgba(15, 100, 80, 1);
              margin: 2px;
              cursor: pointer;
              text-transform: uppercase;
              font-size: 14px;
              font-weight: 400;
            }
            .selected {
              border: #5ece7b solid 3px;
            }
          }
        }
      }
    }
    .product-count {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 5px;
      margin-right: 24px;
      height: 190px;
      width: 24px;
      .inc {
        width: 24px;
        height: 24px;
        margin-bottom: 60px;
        cursor: pointer;
      }
      span {
        font-weight: 500;
        font-size: 16px;
      }
      .dec {
        width: 24px;
        height: 24px;
        margin-top: 60px;
        cursor: pointer;
      }
    }
    .pro-img {
      height: 190px;
      margin: 5px;
      .product-img {
        width: 121px;
        height: 190px;
      }
    }
  }
`;
