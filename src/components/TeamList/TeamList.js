import React, { Component } from 'react';
import { TeamCard } from 'components';

export default class TeamList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team-list">
        <h2>Top Teams in NYC</h2>
        <TeamCard />
      </div>
    );
  }
}
