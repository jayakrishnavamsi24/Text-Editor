import styled from 'styled-components'

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  margin-top: 10px;
`

export const Button = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`
export const UnderlineButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const ItalicButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  color: ${props => props.color};
`

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
`

export const ImageElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80%;
`

export const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #25262c;
  height: 100%;
  width: 55%;
  margin-left: 30px;
  border: 1px solid #334155;
  border-radius: 9px;
`
export const HrElement = styled.hr`
  background-color: #334155;
  width: 100%;
  height: 1px;
  border: none;
`
export const ButtonContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 0px;
  margin: 15px 10px;
  margin-bottom: 5px;
`

export const TextAreaElement = styled.textarea`
  border: none;
  outline: none;
  background-color: transparent;
  color: #f1f5f9;
  font-size: 16px;
  width: 100%;
  height: 100%;
  padding: 10px;
  font-style: ${props => props.fontStyle};
  text-decoration: ${props => props.textDecoration};
  font-weight: ${props => props.fontWeight};
`
