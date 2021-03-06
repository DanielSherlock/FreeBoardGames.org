const Thumbnail = require('./media/thumbnail.jpg');
import { GameMode } from 'gamesShared/definitions/mode';
import { IGameDef } from 'gamesShared/definitions/game';
import instructions from './instructions.md';

export const seabattleGameDef: IGameDef = {
  code: 'seabattle',
  name: 'Sea Battle',
  imageURL: Thumbnail,
  minPlayers: 2,
  maxPlayers: 2,
  modes: [{ mode: GameMode.AI }, { mode: GameMode.OnlineFriend }],
  description: 'Similar to Battleship',
  descriptionTag: `Play Sea Battle, a free online game similar\
 to Battleship. You can play single-player against the computer\
 or multi-player against a friend online.`,
  instructions: {
    videoId: 'q0qpQ8doUp8',
    text: instructions,
  },
  config: () => import('./config'),
  aiConfig: () => import('./ai'),
};
