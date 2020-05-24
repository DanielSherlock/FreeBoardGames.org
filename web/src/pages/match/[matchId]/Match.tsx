import React from 'react';
import Game from 'components/App/Game/Game';
import { connect } from 'react-redux';
import { NextRouter, withRouter } from 'next/router';
import { Dispatch } from 'redux';
import NicknameRequired from 'components/App/Lobby/NicknameRequired';
import MessagePage from 'components/App/MessagePageClass';
import { Match as MatchDto } from 'dto/match/Match';
import { LobbyService } from 'components/App/Lobby/LobbyService';

interface IMatchProps {
  router: NextRouter;
  dispatch: Dispatch;
}

interface IMatchState {
  loading: boolean;
  match: MatchDto;
}

export class Match extends React.Component<IMatchProps, IMatchState> {
  state = { loading: true, match: undefined };

  componentDidMount() {
    const matchId = this.props.router.query.matchId as string;
    LobbyService.getMatch(this.props.dispatch, matchId).then((match) => {
      this.setState({ match, loading: false });
    });
  }

  render() {
    if (this.state.loading) {
      return (
        <NicknameRequired>
          <MessagePage type={'loading'} message={'Loading...'} />
        </NicknameRequired>
      );
    }
    return <Game match={this.state.match} />;
  }
}

/* istanbul ignore next */
const mapStateToProps = function (state) {
  return {
    user: { ...state.user },
  };
};

export default withRouter(connect(mapStateToProps)(Match));
