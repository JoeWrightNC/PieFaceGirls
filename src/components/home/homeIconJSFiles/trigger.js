import styled from 'styled-components';
import {HomeIcon} from './homeIcon.js';
import {BioIcon} from "./bioIcon"
import {MusicIcon} from "./musicIcon"
import {PhotosIcon} from "./photosIcon"
import {VideosIcon} from "./videosIcon"
import {BlogIcon} from "./blogIcon"

export const Trigger = styled.div`
  width: 12vh;
  height: 12vh;
  background: transparent;
 
  &:hover ${HomeIcon} {
    transform: scale(2.5)rotate(1080deg);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${BioIcon} {
    transform: scale(2.0) translate(0px, 20px);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${MusicIcon} {
    transform: rotate3d(1, 1, 1, 45deg) scale(2.5);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${PhotosIcon} {
    transform: skew(20deg,10deg) scale(2.0);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${VideosIcon} {
    transform: rotate(1800deg) scale(2.5);
    transition: transform 1000ms ease-in-out;
  }

  &:hover ${BlogIcon} {
    transform: skew(0deg, 40deg) rotate(180deg) scale(2.25);
    transition: transform 1000ms ease-in-out;
  }
`
 
export default Trigger;