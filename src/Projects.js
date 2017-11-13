// Component defines content on the homepage

import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import UserCard from './modules/UserCard';

class Projects extends Component {
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
      <Container>
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
      </Container>
    );
  }
}

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-content: stretch;
  flex-wrap: wrap;
  grid-row-start: 4;
  grid-column: span 4;
  margin: 5px;
`;

export default Projects;
