import styled from "styled-components";

export const ProductViewStyle = styled.div`
  .ProductView {
    position: absolute;
    width: 1200px;
    height: 600px;
    left: 110px;
    top: 120px;
    display: flex;
    .product-images {
      display: flex;
      flex-direction: column;
      img {
        width: 100px;
        height: 100px;
        margin-right: 60px;
        margin-bottom: 40px;
        cursor: pointer;
      }
    }
    .Photo-Gallery {
      margin-right: 50px;
      img {
        width: 700px;
        height: 600px;
      }
    }
    .product-info {
      width: 520px;
      height: 595px;
      h2 {
        font-family: "Raleway";
        color: #1d1f22;
        font-style: normal;
        font-weight: 600;
        font-size: 30px;
        line-height: 27px;
      }
      h3 {
        font-family: "Raleway";
        font-style: normal;
        font-weight: 400;
        font-size: 30px;
        line-height: 27px;
        color: #1d1f22;
      }
      .size {
        // border: #1d1f22 solid 1px;
        display: flex;
        flex-direction: column;
        margin-top: -8px;
        h4 {
          font-family: "Roboto Condensed";
          text-transform: uppercase;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #1d1f22;
          margin-top: -5px;
        }
        .size-box {
          // border: #1d1f22 solid 1px;
          display: flex;
          margin-top: -20px;
          .size-x {
            font-family: "Source Sans Pro";
            border: 1px solid #1d1f22;
            width: 63px;
            height: 45px;
            margin: 2px;
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
        margin-top: 10px;
        h4 {
          font-family: "Roboto Condensed";
          text-transform: uppercase;
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #1d1f22;
          margin-top: -5px;
        }
        .color-box {
          font-family: "Source Sans Pro";
          display: flex;
          margin-top: -15px;
          .color-x {
            border: #1d1f22 solid 1px;
            width: 32px;
            height: 32px;
            margin: 2px;
            cursor: pointer;
          }
          .selected {
            border: #5ece7b solid 3px;
          }
        }
      }
      .price {
        display: flex;
        flex-direction: column;
        h4 {
          text-transform: uppercase;
          font-family: "Roboto Condensed";
          font-style: normal;
          font-weight: 700;
          font-size: 18px;
          color: #1d1f22;
        }
        span {
          font-style: normal;
          font-weight: 700;
          font-size: 24px;
          color: #1d1f22;
          margin-top: -10px;
        }
      }
      .out {
        /* padding: 16px 32px; */
        width: 288px;
        height: 52px;
        background: #5ece7b;
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 120%;
        text-transform: uppercase;
        text-align: center;
        color: #ffffff;
        border: none;
        display: flex;
        justify-content: center;
        align-items: center;
        /* margin-top: 20px; */
      }
      .add {
        padding: 16px 32px;
        width: 288px;
        height: 52px;
        background: #5ece7b;
        font-style: normal;
        font-family: "Raleway";
        font-weight: 500;
        font-size: 16px;
        line-height: 120%;
        text-transform: uppercase;
        color: #ffffff;
        border: none;
        margin-top: 20px;
        cursor: pointer;
      }
      .descreption {
        font-style: normal;
        font-family: "Roboto";
        font-weight: 400;
        font-size: 16px;
        color: #1d1f22;
        margin-top: 40px;
      }
    }
  }
`;
