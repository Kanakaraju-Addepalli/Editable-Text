import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f5d0fe;
  height: 100vh;
`
export const CardContainer = styled.div`
  background-color: #ffffff;

  padding-top: 20px;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  border-radius: 10px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: #000000;
  font-size: 25px;
  margin-bottom: 30px;
  text-align: center;
`
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
`
export const InputField = styled.input`
  color: #323f4b;
  height: 35px;
  border: 2px solid #cbd2d9;
  border-radius: 5px;
  outline: none;
  margin-right: 15px;
  padding-left: 10px;
`
export const ParagraphText = styled.p`
  margin-right: 20px;
  color: #323f4b;
  font-size: 18px;
  font-weight: normal;
`
export const Button = styled.button`
  outline: none;
  border: none;
  background-color: #d946ef;
  color: #ffffff;
  border-radius: 4px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 15px;
  padding-right: 15px;
  font-size: 13px;
  cursor: pointer;
`
