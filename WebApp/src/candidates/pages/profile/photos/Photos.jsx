import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase';
import Dropzone from 'react-dropzone';
import Cropper from 'react-cropper';
import { toastr } from 'react-redux-toastr';
import { Card, CardHeader, CardBody, Row, Col } from 'reactstrap';
import FontAwesome from 'react-fontawesome';
import 'cropperjs/dist/cropper.css';

import { uploadProfileImage } from '../profileActions'

const query = ({auth}) => {
  return [
    {
      collection: 'users',
      doc: auth.uid,
      subcollections: [{collection: 'photos'}],
      storeAs: 'photos'
    }
  ]
}

const actions = {
  uploadProfileImage,
};

const mapState = (state) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
})

class Photos extends Component {

  state = {
    files: [],
    fileName: '',
    cropResult: null,
    image: {}
  }

  uploadImage = async () => {
    try {
      await this.props.uploadProfileImage(this.state.image, this.state.fileName);
      this.cancelCrop();
      toastr.success('Success', 'Photo has been uploaded');
    }
    catch (error) {
      toastr.error('Error', error.message);
    }
  }

  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === 'undefined') return;

    this.refs.cropper.getCroppedCanvas().toBlob(blob => {
      let imageUrl = URL.createObjectURL(blob);
      this.setState({
        cropResult: imageUrl,
        image: blob
      })
    }, 'image/jpeg');
  }

  cancelCrop = () => {
    this.setState({
      files: [],
      image: {}
    })
  }

  onDrop = files => {
    this.setState({
      files: files,
      fileName: files[0].name
    })
  }

  render() {
    return (
      <React.Fragment>
        <Card className="dash-card dash-card--normal">
          <CardHeader className="dash-card-header dash-card-header-comp dash-card-header--normal">
            <span className="dash-card-header-text dash-card-header-text--normal dash-comp-body-text">Photos</span>
          </CardHeader>

          <CardBody className="dash-card-body dash-card-body--normal dash-card-body-comp">
            <div className="padding-top--8 padding-bottom--12">
              <div className="padding-horizontal--20">
                <Row>
                  <Col lg="6">
                    Step 1 - Add image
                    <Dropzone onDrop={this.onDrop} multiple={false} >
                      <div className="text-center">
                        <h1 className="padding-top--16"><FontAwesome name="upload"></FontAwesome></h1>
                        Drop image here, or click to add.
                      </div>
                    </Dropzone>
                  </Col>
                  <Col lg="6">Step 2 - Resize image</Col>
                  { this.state.files[0] && 
                    <Cropper 
                      style={{height: 200, width: '45%'}}
                      ref='cropper'
                      src={this.state.files[0].preview}
                      aspectRatio={1}
                      viewMode={0}
                      dragMode='move'
                      guides={false}
                      scalable={true}
                      cropBoxMovable={true}
                      cropBoxResizable={true}
                      crop={this.cropImage}
                    />
                  }
                </Row>
                <Row>
                  <Col lg="12">
                    Step 3 - Preview and upload <br />
                    {  
                      this.state.files[0] &&
                      <div>
                        <img src={ this.state.cropResult } alt={ this.state.fileName } style={{ maxWidth: '300px'}}></img>
                        <button style={{width: '150px'}} onClick={this.uploadImage} className="btn dash-btn dash-btn--normal dash-btn-comp-primary">Save</button>
                        <button style={{width: '150px'}} onClick={this.cancelCrop} className="btn dash-btn dash-btn--normal">Cancel</button>
                      </div>
                    }
                  </Col>
                </Row>
              </div>
            </div>
          </CardBody>

        </Card>
      </React.Fragment>
    )
  }
}

export default compose(
  connect(mapState, actions),
  firestoreConnect(auth => query(auth))
)(Photos)