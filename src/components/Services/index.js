import React from 'react'
import Icon1 from '../../images/cat-1.png'
import Icon2 from '../../images/cat-1.png'
import Icon3 from '../../images/cat-1.png'

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';

const Services = () => {
  return (
    <>
      <ServicesContainer id="services">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1}/>
            <ServicesH2>SUBTITLE</ServicesH2>
            <ServicesP>Pharagraph LOREM LOREM LOREM</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2}/>
            <ServicesH2>SUBTITLE</ServicesH2>
            <ServicesP>Pharagraph LOREM LOREM LOREM</ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3}/>
            <ServicesH2>SUBTITLE</ServicesH2>
            <ServicesP>Pharagraph LOREM LOREM LOREM</ServicesP>
          </ServicesCard>
          
        </ServicesWrapper>
      </ServicesContainer>
    </>
  )
}

export default Services
