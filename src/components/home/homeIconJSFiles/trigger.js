import styled from 'styled-components';
import {HomeIcon} from './homeIcon.js';
 
export const Trigger = styled.div`
  width: 10vh;
  height: 10vh;
  background: transparent;
 
  &:hover ${HomeIcon} {
    transform: rotate(1080deg);
    transition: transform 3000ms ease-in-out;
  }
`
 
export default Trigger;