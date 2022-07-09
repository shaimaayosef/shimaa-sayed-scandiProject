import styled from "styled-components";

export const NavStyle = styled.div`
  nav {
    display: flex;
    position: absolute;
    width: 100%;
    height: 80px;
    left: 0px;
    top: 0px;
    .catogeries {
      display: flex;
      flex: 1;
      flex-direction: row;
      align-items: flex-start;
      height: 56px;
      margin-left: 80px;
      margin-top: 10px;
      list-style: none;
      li {
        padding-left: 16px;
        padding-right: 16px;
        padding-bottom: 20px;
        cursor: pointer;
        &.active {
          border-bottom: solid 3px #5ece7b;
          .nav-links {
            color: #5ece7b;
          }
        }
        .nav-links {
          text-decoration: none;
          font-family: "Raleway";
          font-style: normal;
          font-weight: 450;
          font-size: 16px;
          text-transform: uppercase;
          line-height: 120%;
          color: black;
        }
      }
    }
    .nav-logo {
      align-self: center;
      width: 45px;
      height: 45px;
      flex: 1;
    }
    .cart-logo {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-right: 110px;
      .arrow {
        width: 10px;
        height: 5px;
        cursor: pointer;
      }
      .dropbtn {
        display: inline-block;
        color: black;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }
      .dropdown {
        display: inline-block;
        margin-bottom: 5px;
        .dropbtn {
          font-size: 20px;
        }
      }
      .dropdown-content {
        display: none;
        position: absolute;
        background-color: white;
        min-width: 90px;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        z-index: 1;
        .options {
          width: 90px;
          font-size: large;
          cursor: pointer;
        }
      }
      .dropdown-content option {
        color: black;
        padding: 12px 16px;
        display: block;
        text-align: left;
      }
      .dropdown-content option:hover {
        background-color: #f1f1f1;
      }
      .displayed {
        display: block;
      }
      .cart {
        position: relative;
        width: 30px;
        height: 30px;
        .cart-img {
          margin-left: 22px;
          width: 23px;
          height: 23px;
          cursor: pointer;
        }
        .badge {
          width: 23px;
          height: 23px;
          border-radius: 50%;
          background-color: black;
          display: flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          color: #f1f1f1;
          top: -11px;
          right: -30px;
          span {
            font-family: "Roboto", sans-serif;
            font-style: normal;
            font-weight: 700;
            font-size: 14px;
            line-height: 16px;
            display: flex;
            align-items: center;
            text-align: center;
            text-transform: uppercase;
            color: #ffffff;
          }
        }
      }
    }
  }
`;
