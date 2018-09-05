import styled from 'styled-components';
import {HomeIcon} from './homeIcon.js';
import {BioIcon} from "./bioIcon"
import {MusicIcon} from "./musicIcon"

export const Trigger = styled.div`
  width: 12vh;
  height: 12vh;
  background: transparent;
 
  &:hover ${HomeIcon} {
    transform: scale(2.5)rotate(1080deg);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${BioIcon} {
    transform: scale(2.5) translate(0px, 20px) rotate(30deg);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${MusicIcon} {
    transform: rotate3d(1, 1, 1, 45deg) scale(2.5);
    transition: transform 1000ms ease-in-out;
  }
`
 
export default Trigger;