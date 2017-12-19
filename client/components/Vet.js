import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getVetsThunk } from '../store';

export class Vet extends Component {
  componentDidMount() {
    this.props.getVets()
  }
  render() {
    console.log('testing in the console')
    return (
      <div>
        <h1>All Vets</h1>
        <div>
          {this.props.vets && this.props.vets.map(vet => {
            return (
              <div className='card' key={vet.id}>
                <h2>{vet.name}</h2>
                <ul className='ul'>
                  <li>Email: {vet.email}</li>
                  <li>About Me: {vet.description}</li>
                </ul>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

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
