import React from 'react'
import { BoxHeaderStyled,BolderText,UnderLineText,TextBox } from './Style'
import MediaButton from '../MediaButton'

const DescriptionHeaderBox = () => {
  return (
   <BoxHeaderStyled>
    <TextBox>
    <BolderText>bitsofcode.</BolderText> Articles on Frontend Development. 
    All articles are written by <UnderLineText>ire Aderinokun</UnderLineText>,
     Frontend Developer and User Interface Desiner.
    </TextBox>
     <MediaButton />
   </BoxHeaderStyled>
  )
}

export default DescriptionHeaderBox