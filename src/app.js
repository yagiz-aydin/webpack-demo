import React from 'react';
import { DivContainer, TitleContainer, IconContainer } from './styled';
import WebpackIcon from './webpack.svg';

export default function App(){
   return (<DivContainer>
      <TitleContainer>Hello this is Webpack Demo!</TitleContainer>
      <IconContainer as={WebpackIcon}/>
   </DivContainer>)
}