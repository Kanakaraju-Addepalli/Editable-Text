import {Component} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  InputContainer,
  ParagraphText,
  InputField,
  Button,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {editableText: '', isEditable: false}

  onChangeInput = event => {
    this.setState({editableText: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isEditable: !prevState.isEditable}))
  }

  render() {
    const {editableText, isEditable} = this.state

    const EditOrSaveButton = isEditable ? 'Edit' : 'Save'

    return (
      <AppContainer>
        <CardContainer>
          <Heading>Editable Text Input</Heading>
          <InputContainer>
            {isEditable ? (
              <ParagraphText>{editableText}</ParagraphText>
            ) : (
              <InputField
                type="text"
                value={editableText}
                onChange={this.onChangeInput}
              />
            )}
            <Button type="button" onClick={this.onClickButton}>
              {EditOrSaveButton}
            </Button>
          </InputContainer>
        </CardContainer>
      </AppContainer>
    )
  }
}
export default EditableTextInput
