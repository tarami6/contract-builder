import React, { Component } from 'react';
import { connect } from 'react-redux'
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import '../../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
import { editElementText, setCurrentEditable, editStyleColumn } from 'redux/actions'
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
      currentElement: undefined,
      hover: false
    };
  }

  componentDidMount() {
    const contentState = ContentState.createFromBlockArray(htmlToDraft(this.props.elements[this.props.elementId].content));
    const editorState = EditorState.createWithContent(contentState);
    this.setState({
      ...this.state,
      editorState,
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

  onEditorStateChange = (editorState, e) => {

    console.log('onEditorStateChange', e)
    this.setState({
      editorState,
    });
  };

  setEditMode = () => {
    const { editMode, currentElement } = this.state;
    const { columns } = this.props
    this.setState({ editMode: !editMode })
    console.log('double click')
    let newWidth = {
      ...columns[currentElement.columnId].style,
    }

    // if (editMode) {
    //   newWidth.minWidth = '95%'
    //   this.props.dispatchStyle(currentElement.columnId, newWidth)
    // } else {
    //   newWidth.minWidth = '0%'
    //   this.props.dispatchStyle(currentElement.columnId, newWidth)
    // }
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
    if(currentElement?.id !== this.props.editable.currentId){
      this.props.setEditable(currentElement)
    }
  }

  onLeave = (e) => {
    e.stopPropagation()
    this.setState({hover: false})
  }

  onEnter = (e) => {
    e.stopPropagation()
    this.setState({hover: true})
  }

  render() {
    const { elementId, editorState, editMode, currentElement, hover } = this.state;
    const { editable } = this.props
    return (
      <Card
        // onMouseOver={this.onEnter}
        // onMouseOut={this.onLeave}
        style={{ ...currentElement?.style, minHeight: editMode ? '300px' : 'inherit', display: 'flex', width: '100%' }}
        // elevation={(elementId === editable.currentId || hover) ? 3 : 0}
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
          <div onDoubleClick={this.setEditMode} onClick={this.setEditable} style={{ width: '100%' }}>
            <div className="content" style={{ width: '100%' }} dangerouslySetInnerHTML={{ __html: currentElement?.content }}></div>
          </div>
        }
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    editable: state.editable,
    elements: state.contractDom.elements,
    columns: state.contractDom.columns
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editElementText: (id, value) => dispatch(editElementText(id, value)),
    setEditable: (element) => dispatch(setCurrentEditable(element)),
    dispatchStyle: (id, style) => dispatch(editStyleColumn(id, style))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditorConvertToJSON);
