import styled from 'styled-components'
import Colors from '../../theme/theme.colors'

export const SignUpContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  
  button{
    margin-top: .5rem;

  }

`
export const CustomParagraph = styled.p`
  width: 100%;
  font-weight: bold;
  margin-bottom: .4rem;`

export const SignUpHeadline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: ${Colors.text.dark};
  padding-bottom: 20px;
  border-bottom: 1px solid #6c757d;
  width: 100%;
  text-align: center;
 
`

export const SignUpContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
  padding: 1rem;
  height: 100%;
 
`

export const SignUpInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;

  }
`
