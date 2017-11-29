import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LeagueList } from 'components';

class League extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="league container">
        <Helmet title="Leagues" />
        <div className="row">
          <div className="col-md-8">
            <LeagueList />
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

export default connect(mapStateToProps, mapDispatchToProps)(League);
