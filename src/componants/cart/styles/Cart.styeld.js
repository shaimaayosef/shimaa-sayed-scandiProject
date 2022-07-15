import styled from "styled-components";

export const CartStyle = styled.div`
  .productCart {
    border-bottom: #e5e5e5 solid 1px;
    border-top: #e5e5e5 solid 1px;
    padding: 5px;
    width: 1240px;
    height: 300px;
    display: flex;
    // position: absolute;
    // left: 150px;
    // top: 120px;
    .product-info {
      margin-top: -15px;
      margin-right: 700px;
      h2 {
        color: #1d1f22;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 27px;
      }
      h3 {
        margin-top: -5px;
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 27px;
        color: #1d1f22;
      }
      .price {
        margin-top: -15px;
        display: flex;
        flex-direction: column;

        span {
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
        .size {
          display: flex;
          flex-direction: column;
          margin-top: -8px;
          h4 {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #1d1f22;
          }
          .size-box {
            display: flex;
            margin-top: -20px;
            .size-x {
              border: 1px solid #1d1f22;
              width: 63px;
              height: 45px;
              margin: 2px;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
            }
          }
        }
        .color {
          display: flex;
          flex-direction: column;
          margin-top: -8px;

          h4 {
            font-style: normal;
            font-weight: 700;
            font-size: 18px;
            color: #1d1f22;
          }
          .color-box {
            display: flex;
            margin-top: -20px;
            .color-x {
              border: #1d1f22 solid 1px;
              width: 32px;
              height: 32px;
              background-color: rgba(15, 100, 80, 1);
              margin: 2px;
              cursor: pointer;
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
      height: 288px;
      width: 45px;
      .increse {
        width: 45px;
        height: 45px;
        margin-bottom: 78px;
        cursor: pointer;
      }
      span {
        font-weight: 500;
        font-size: 24px;
      }
      .decrese {
        width: 45px;
        height: 45px;
        margin-top: 90px;
        cursor: pointer;
      }
    }
    .pro-img {
      height: 288px;
      margin: 5px;
      .product-img {
        width: 200px;
        height: 288px;
      }
      .changing-box {
        width: 56px;
        height: 24px;
        margin-top: -40px;
        margin-left: 135px;
        .prev {
          margin-right: 8px;
          cursor: pointer;
        }
        .after {
          cursor: pointer;
        }
      }
    }
  }

  .cart-co {
    position: absolute;
    left: 150px;
    top: 120px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    width: 1260px;
    height: auto;
    margin-left: 50px;
    margin-top: -20px;
    h1 {
      font-weight: 700;
      font-size: 32px;
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
        font-weight: 500;
        font-size: 24px;
        color: #1d1f22;
        margin-bottom: -22px;
        span {
          font-weight: 700;
          font-size: 24px;
          color: #1d1f22;
        }
      }
      .order-ptn {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2px;
        width: 279px;
        height: 43px;
        background: #5ece7b;
        font-style: normal;
        font-weight: 500;
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
`;
