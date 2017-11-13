import React, { Component } from 'react';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      twitter: 'sneakycr0w',
      instagram: 'sneakycr0w',
    };
  }
  render() {
    return <p>Profile page works</p>;
  }
}

export default Profile;
