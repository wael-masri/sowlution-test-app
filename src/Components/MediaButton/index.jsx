import React from 'react'
import { Container,ButtonMedia,IconTwitterStyled,LabelButton,ToolTipLabelStyled } from './Style'

const MediaButton = () => {
  return (
   <Container>
   <ButtonMedia>
    <IconTwitterStyled /><LabelButton>Follow @ireaderinokun</LabelButton>
   </ButtonMedia>
   <ToolTipLabelStyled>
    19.1K followers
   </ToolTipLabelStyled>
   </Container>
  )
}

export default MediaButton