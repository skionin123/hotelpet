import styled from 'styled-components'
import {Link} from 'react-scroll'
import {Link as LinkT} from 'react-router-dom'

export const Button = styled(Link)`
  border-radius: 50px;
  background: ${({primary}) => (primary? '#E7F6AD' : '#E7F6AD')};
  white-space: nowrap;
  padding: ${({big}) => (big? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark? '#010606' : '#010606')};
  font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary? '#fff' : '#fff')};
    
  }
`

export const Button2 = styled(LinkT)`
  border-radius: 50px;
  background: ${({primary}) => (primary? '#E7F6AD' : '#E7F6AD')};
  white-space: nowrap;
  padding: ${({big}) => (big? '14px 48px' : '12px 30px')};
  color: ${({dark}) => (dark? '#010606' : '#010606')};
  font-size: ${({fontBig}) => (fontBig? '20px' : '16px')};
  outline: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({primary}) => (primary? '#fff' : '#fff')};
    
  }
`