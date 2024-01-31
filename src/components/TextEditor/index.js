import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'

import {GoItalic} from 'react-icons/go'

import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Heading,
  Button,
  Image,
  ImageElement,
  EditorContainer,
  HrElement,
  ButtonContainer,
  TextAreaElement,
  UnderlineButton,
  ItalicButton,
} from './styledComponents'

import './index.css'

class TextEditor extends Component {
  state = {toBold: false, toItalic: false, toUnderline: false}

  onBold = () => {
    this.setState(prevState => ({toBold: !prevState.toBold}))
  }

  onItalic = () => {
    this.setState(prevState => ({toItalic: !prevState.toItalic}))
  }

  onUnderline = () => {
    this.setState(prevState => ({toUnderline: !prevState.toUnderline}))
  }

  render() {
    const {toBold, toItalic, toUnderline} = this.state

    const boldButtonColor = toBold === false ? '#f1f5f9' : ' #faff00'

    const italicButtonColor = toItalic === false ? '#f1f5f9' : ' #faff00'

    const underlineButtonColor = toUnderline === false ? '#f1f5f9' : ' #faff00'

    const fontWeight = toBold === false ? 'normal' : 'bold'

    const fontStyle = toItalic === false ? 'normal' : 'italic'

    const textDecoration = toUnderline === false ? 'normal' : 'underline'

    return (
      <div className="bg-container">
        <div className="text-editor-container">
          <div className="image-container">
            <Heading>Text Editor</Heading>
            <ImageElement>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
                className="image"
                alt="text editor"
              />
            </ImageElement>
          </div>
          <EditorContainer>
            <ButtonContainer>
              <li>
                <Button
                  data-testid="bold"
                  color={boldButtonColor}
                  type="button"
                  onClick={this.onBold}
                >
                  <VscBold size={25} />
                </Button>
              </li>
              <li>
                <ItalicButton
                  className="button"
                  data-testid="italic"
                  type="button"
                  color={italicButtonColor}
                  onClick={this.onItalic}
                >
                  <GoItalic size={25} />
                </ItalicButton>
              </li>
              <li>
                <UnderlineButton
                  className="button"
                  data-testid="underline"
                  type="button"
                  color={underlineButtonColor}
                  onClick={this.onUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </UnderlineButton>
              </li>
            </ButtonContainer>
            <HrElement />
            <TextAreaElement
              fontWeight={fontWeight}
              fontStyle={fontStyle}
              textDecoration={textDecoration}
            />
          </EditorContainer>
        </div>
      </div>
    )
  }
}

export default TextEditor
