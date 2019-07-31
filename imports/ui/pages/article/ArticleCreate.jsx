import React from 'react';
import Modal from 'react-modal';
import { Meteor } from 'meteor/meteor';

import {AutoForm, TextField, LongTextField, NumField} from 'uniforms-unstyled';
import ArticleSchema from './ArticleSchema';

class ArticleCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      error: '',
      pictures: []
    };
  }
  onSubmit = (data) => {

    Meteor.call('article.create', data, (err) => {
      if(!err) {
        this.handleModalClose();
      } else {
        this.setState({ error: err.reason});
        console.log(err);
        console.log(data);
      }
    });
  }
  handleModalClose() {
    this.setState({
      isOpen: false,
      error: ''
    });
  }
  onDrop = picture => {
    this.setState({
        pictures: this.state.pictures.concat(picture),
    });
}
  render() {
    return (
      <div>
        <button className="button" onClick={() => this.setState({ isOpen: true})}>+ Add Article</button>
        <Modal 
          isOpen={this.state.isOpen}
          contentLabel="Add Article"
          onRequestClose={this.handleModalClose.bind(this)}
          overlayClassName="boxed-view boxed-view--modal"
          className="boxed-view__box"
          appElement={document.getElementById('app')}>
          <h1>Add Article</h1>
          {this.state.error ? <p>{this.state.error}</p> : undefined}
          <AutoForm schema={ArticleSchema} onSubmit={this.onSubmit} className="boxed-view__form">
              <TextField name="title" max="150"/>
              <LongTextField name="description" className="uniformsField" max="500" />
              <TextField name="address"/>
              <NumField step={1} className="uniformsField" name="numberOfRooms"/>
              <NumField step={10000} className="uniformsField" name="price"/>
              <TextField name="phoneNumber"/>
              <button type="submit" className="button">
                Add Article
              </button>
              <button type="button" className="button button--secondary" onClick={this.handleModalClose.bind(this)}>Cancel</button>
          </AutoForm>
        </Modal>
      </div>
    )
  }
}
  
export default ArticleCreate;