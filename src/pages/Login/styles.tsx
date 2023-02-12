import styled from "styled-components";

const CustomButton = styled.button`
  background: #FF805D;
  height: 50px;
  width: 100%;
  margin-top: 30px;
  color: #FFF;
  font-size: 14px;
  font-weight: bold;
  border-radius: 0.5em;
  border: none;
`;

const Container = styled.div<{isMobile: boolean}>`
  margin: 0 auto;
  background: #F0F0F0;
  width: ${ (props) => props?.isMobile ? 'auto' : '1200px' };
  border-radius: 1em;
  display: flex;
  flex-direction: row;
  height: 800px;
`;

const Banner = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  background: #452B4E;
  border-radius: 1em 0 0 1em;
`;

const LoginContainer = styled.div<{isMobile: boolean}>`
  border-radius: ${({isMobile}) => isMobile ? '1em' : '0 1em 1em 0'};
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #FFF;
`;

const LoginSubContainer = styled.div<{isMobile: boolean}>`
  /* background: #333; */
  width: ${({isMobile}) => isMobile ? '90%' : '70%'};
`;

const ButtonSocialMedia = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 15px;
  margin: 15px 0;
  box-shadow: 0 0 10px #e0dfdf;
  border-radius: 0.5em;
  /* font-weight: bold; */
  background: #FFF;

  & .icon{
    font-size: 20px;
    margin-right: 10px;
  }
`;

const Separator = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;

  & div{
    background: #EDEDED;
    height: 2px;
    width: 100%;
  }

  & span{
    background: #FFF;
    position: relative;
    top: -10px;
    width: 60px;
    text-align: center;
  }
`;

export {
  CustomButton,
  Container,
  Banner,
  LoginContainer,
  LoginSubContainer,
  ButtonSocialMedia,
  Separator,
}