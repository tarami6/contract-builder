import React, { Component } from 'react';
import { connect } from 'react-redux'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { editElementText } from '../../redux/actions/actionsContractDom'
import { setCurrentEditable } from '../../redux/actions/actionsEditable'
import { Save } from '@material-ui/icons'
import { isEqual } from 'lodash'
import { Card } from '@material-ui/core'

class EditorConvertToJSON extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      elementId: undefined,
      editMode: false,
      currentElement: undefined
    };
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      elementId: this.props.elementId,
      currentElement: this.props.elements[this.props.elementId]
    })
  }
  componentDidUpdate(prevProps) {
    if (prevProps.elements[this.props.elementId].content !== this.props.elements[this.props.elementId].content) {
      const contentState = ContentState.createFromBlockArray(htmlToDraft(this.props.elements[this.props.elementId].content));
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ currentElement: this.props.elements[this.props.elementId], editorState })
    }
    if (!isEqual(prevProps.elements[this.props.elementId].style, this.props.elements[this.props.elementId].style)) {
      const contentState = ContentState.createFromBlockArray(htmlToDraft(this.props.elements[this.props.elementId].content));
      const editorState = EditorState.createWithContent(contentState);
      this.setState({ currentElement: this.props.elements[this.props.elementId], editorState })
    }
  }

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  setEditMode = () => {
    this.setState({ editMode: !this.state.editMode })
  }

  save = () => {
    const { editorState, currentElement } = this.state;
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()))
    this.props.editElementText(currentElement.id, content)
    this.setEditMode()
  }

  setEditable = (e) => {
    const { currentElement } = this.state
    e.stopPropagation()
    this.props.setEditable(currentElement)
  }

  render() {
    const { elementId, editorState, editMode, currentElement } = this.state;
    const {editable } = this.props
    return (
      <Card
        style={{ ...currentElement?.style, minHeight: editMode ? '300px' : 'inherit', display: 'flex' }}
        elevation={(elementId === editable.currentId) ? 3 : 0}
      >
        { editMode ?
          <>
            <Editor
              editorState={editorState}
              wrapperClassName="demo-wrapper"
              editorClassName="demo-editor"
              onEditorStateChange={this.onEditorStateChange}
            />
            <div onClick={this.save}>
              <Save style={{
                fontSize: "20px",
                marginLeft: "4px",
                color: "grey",
                cursor: "pointer",
              }} />
            </div>
          </>
          :
          <div onDoubleClick={this.setEditMode} onClick={this.setEditable} style={{width: '100%'}}>
            <div className="content" style={{width: '100%'}} dangerouslySetInnerHTML={{ __html: currentElement?.content }}></div>

          </div>
        }

      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editable: state.editable,
    elements: state.contractDom.elements
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editElementText: (id, value) => dispatch(editElementText(id, value)),
    setEditable: (element) => dispatch(setCurrentEditable(element))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditorConvertToJSON);
