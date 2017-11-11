// Component defines content on the homepage

import React, { Component } from 'react';
import axios from 'axios';

import UserCard from './UserCard';
import { Main } from './styled-utils';

class Home extends Component {
  constructor() {
    super();
    this.state = {
      repos: [],
    };
  }
  componentDidMount() {
    axios.get('https://api.github.com/users/sneakycr0w/repos').then(res => {
      this.setState({ repos: res.data });
      console.log(this.state);
      return res.data;
    });
  }
  render() {
    // const currentProjects = ['sneakycr0w.com', 'lotus'];
    const currentProjects = 'all';
    return (
      <Main>
        {this.state.repos.map(repo => {
          if (currentProjects.includes(repo.name) || currentProjects === 'all') {
            const updatedAt = new Date(repo.updated_at);
            return (
              <UserCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                lastCommit={updatedAt.toDateString()}
              />
            );
          }
          return console.log(`${repo.name} was not in current projects`);
        })}
      </Main>
    );
  }
}

export default Home;
