import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { TeamList } from 'components';

class Team extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="team container">
        <Helmet title="Teams" />
        <div className="row">
          <div className="col-md-8">
            <TeamList />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ }, dispatch)
});

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(Team);
