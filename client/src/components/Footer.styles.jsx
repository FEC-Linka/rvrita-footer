import styled from 'styled-components';

export const FooterContainer = styled.div`
  max-width: 100%;
  box-sizing: border-box;
  font-weight: 300;
  font-size: 13px;
  font-family: 'Roboto';
  line-height: 18px;
  letter-spacing: 0.4px;
`;

export const Cont = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

export const Cont1 = styled.div`
  width: 100%;
  background-color: #d7e6f4;
`;

export const Cont2 = styled.div`
  width: 100%;
  background-color: #2c476b;
`;

export const Cont3 = styled.div`
  width: 100%;
  background-color: #212546;
`;

export const EmailSvg = styled.svg`
  fill: #d7e6f4;
  width: 100%
  height: 30px;
  display: block;
`;

export const EmailContainer = styled.div`
  background-color: #d7e6f4;
  padding: 36px 24px;
  text-align: center;
  max-width: 1400px;
  margin: 0 auto;
`;

export const EmailSignUp = styled.p`
  font-weight: 500;
  font-size: 16px;
  margin-top: 0;
  letter-spacing: 0.4px;
  -webkit-font-smoothing: antialiased;
`;

export const EmailInput = styled.input`
  max-width: 480px;
  padding: 9px 12px 9px 18px;
  border-radius: 96px;
  box-shadow: 1px 2px 4px 0 rgba(34, 34, 34, 0.1) inset;
  background: #FFFFFF;
  border: 1px solid #cecece;
  font-size: 16px;
  line-height: 28px;
  box-sizing: border-box;
  width: 33%;
  letter-spacing: 0.4px;
  -webkit-font-smoothing: antialiased;
`;

export const MenuSvg = styled.svg`
  background-color: #d7e6f4;
  width: 100%
  height: 30px;
  fill: #2c476b;
  display: block;
`;

export const MenuListContainer = styled.div`
  background-color: #2c476b;
  display: flex;
  justify-content: space-between;
  color: #ffffff;
  padding-top: 12px;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Header = styled.h3`
  font-size: 16px;
  margin-bottom: 12px;
  font-weight: 500;
  letter-spacing: 0.4px;
  -webkit-font-smoothing: antialiased;
`;

export const MenuList = styled.ul`
  flex-grow: 1;
  flex-basis: 25%;
  max-width: 25%;
  list-style: none;
  margin-bottom: 50px;
`;

export const MenuListItem = styled.li`
  padding: 6px 0;
`;

export const MenuListItemLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

export const Copyright = styled.div`
  display: flex;
  padding: 18px 24px;
  background-color: #212546;
  color: #fff;
  max-width: 1400px;
  margin: 0 auto;
`;

export const Country = styled.p`
  flex-grow: 1;
  flex-basis: 41.66667%;
  max-width: 41.66667%;
  text-align: left;
  font-weight: 500;
`;

export const BottomMenu = styled.div`
  display: flex;
  flex-grow: 1;
  flex-basis: 58.33333%;
  max-width: 58.33333%;
  text-align: right;
  align-items: center;
  justify-content: flex-end;
`;

export const BottomMenuText = styled.p`
  margin-right: 18px;
`;

export const BottomMenuList = styled.ul`
  margin: 0;
  padding: 0;
`;

export const BottomMenuListItem = styled.li`
  display: inline-block;
  margin-right: 18px;
  &:last-child {
    margin-right: 0;
  }
`;

export const BottomMenuListItemLink = styled.a`
  cursor: pointer;
  text-decoration: underline;
`;