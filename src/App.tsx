import { useEffect, useState } from 'react'
import styled, { css } from 'styled-components';
import { IoMail, IoLockClosed, IoEye, IoEyeOff } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import logo from './assets/banner.png';
import storeButtons from './assets/store_buttons.png';
import Checkbox from './components/Checkbox';
import Login from './pages/Login';

function App() {

  return (
    <Login />
  )
}

export default App
