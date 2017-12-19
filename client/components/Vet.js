import React, {Component} from 'react';
import { connect } from 'react-redux';

import { getVetsThunk } from '../store';

export class Vet extends Component{
  componentDidMount(){
    console.log('logging from vets component did mount....')
    this.props.getVets()
  }
render() {
  console.log('testing in the console')
  return (
    <div>
      <h1>hellooo</h1>
      <button>testButton</button>
      {this.props.vets && console.log('vets', this.props.vets)}
    </div>
  )
}}

const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
    vets: state.vet,
  }
}

const mapDispatch = (dispatch) => {
  return {
    getVets: () => {
      dispatch(getVetsThunk());
    }
  }
}

export default connect(mapState, mapDispatch)(Vet);
