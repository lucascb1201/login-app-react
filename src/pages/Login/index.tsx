import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { IoMail, IoLockClosed, IoEye, IoEyeOff } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from '../../assets/banner.png';
import storeButtons from '../../assets/store_buttons.png';
import { Checkbox } from '../../components/Checkbox';
import { Container, Banner, LoginContainer, LoginSubContainer, ButtonSocialMedia, Separator, CustomButton } from './styles';

function Login() {

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    setIsMobile(window.innerWidth < 1000);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [window.innerWidth]);

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    }}>
      <Container isMobile={isMobile}>
        { !isMobile && (
        <Banner style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-around',
          alignItems: 'center',
          padding: '30px 0'
        }}>
          <img src={logo} style={{
            maxWidth: '90%',
            height: 'fit-content'
          }} />
          <img src={storeButtons} style={{
            width: '260px',
            height: 'fit-content'
          }} />
        </Banner>)}
        <LoginContainer isMobile={isMobile}>
          <LoginSubContainer isMobile={isMobile}>
            <div style={{
              objectFit: 'contain',
              fontSize: 30,
              marginBottom: 20,
            }}>
              Log in to LCB
            </div>
            <div style={{
              fontSize: 15,
              marginBottom: 30,
              color: '#999'
            }}>
              Welcome back! login with your data that you entered during registration
            </div>
            <ButtonSocialMedia>
              <FcGoogle className='icon' /> Login with Google
            </ButtonSocialMedia>
            <ButtonSocialMedia>
              <FaFacebookF className='icon' style={{ color: "#4267B2" }} /> Login with Facebook
            </ButtonSocialMedia>

            <Separator><div></div><span>or</span></Separator>

            <div style={{
              display: 'flex', background: '#F5F5F5', padding: 10, borderRadius: '0.5em',
              marginBottom: 20,
            }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 15px 0 10px',
                fontSize: 23,
                color: '#3A3A3A'
              }}>
                <IoMail />
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ fontSize: 12, marginBottom: 5 }}>Email</div>
                <div>
                  <input type='email' placeholder='example@example.com' style={{ width: '80%', background: 'transparent', border: 'none', outline: 'none' }} />
                </div>
              </div>
            </div>

            {/*  */}

            <div style={{ display: 'flex', background: '#F5F5F5', padding: 10, borderRadius: '0.5em' }}>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 15px 0 10px',
                fontSize: 23,
                color: '#3A3A3A'
              }}>
                <IoLockClosed />
              </div>
              <div style={{ width: '100%' }}>
                <div style={{ fontSize: 12, marginBottom: 5 }}>Password</div>
                <div>
                  <input type={passwordVisible ? "text" : "password"} placeholder='********' style={{ width: '80%', background: 'transparent', border: 'none', outline: 'none' }} />
                </div>
              </div>
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: '0 15px 0 10px',
                fontSize: 23,
                color: '#3A3A3A'
              }}>
                {!passwordVisible && <IoEye onClick={() => setPasswordVisible(true)} />}
                {passwordVisible && <IoEyeOff onClick={() => setPasswordVisible(false)} />}
              </div>
            </div>

            {/*  */}

            <div style={{ marginTop: 20, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
              <div>
                <label>
                  <Checkbox />
                  Remember me
                </label>
              </div>
              <div>
                <span style={{ textDecoration: 'underline' }}>Forgot your password?</span>
              </div>
            </div>

            {/*  */}

            <CustomButton>LOGIN</CustomButton>

            <div style={{ textAlign: 'center', marginTop: '30px' }}>
              Don't have an account? <u><b>Register</b></u>
            </div>

          </LoginSubContainer>
        </LoginContainer>
      </Container>
    </div>
  )
}

// const InputCustom = 



export { Login };
