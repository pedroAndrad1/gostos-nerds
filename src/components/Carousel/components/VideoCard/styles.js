import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  
  
`;

export const VideoTitle = styled.p`
  
`
export const Overlay = styled.div`
  position: absolute;
  top:0;
  bottom: 0;
  left: 0;  
  right: 0;
  
  opacity: 0;
  background-color: black;

  transition: all .3s;
  

  &:hover,
  &:focus {
    opacity: .7
   
  }
`