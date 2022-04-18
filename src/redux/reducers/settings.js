import {
  UPDATE_VIDEO_SETTINGS,
  UPDATE_AUDIO_SETTINGS,
  UPDATE_GAME_SETTINGS,
} from '../actions/index';

const INITIAL_STATE = {
  video: {
    appLogoShaking: true,
  },
  audio: {
    musicOn: true,
    soundXfsOn: true,
  },
  game: {
    categories: [
      {
        id: 9,
        category: 'General Knowledge',
      },
      {
        id: 10,
        category: 'Entertainment: Books',
      },
      {
        id: 11,
        category: 'Entertainment: Film',
      },
      {
        id: 12,
        category: 'Entertainment: Music',
      },
      {
        id: 13,
        category: 'Entertainment: Musicals & Theatres',
      },
      {
        id: 14,
        category: 'Entertainment: Television',
      },
      {
        id: 15,
        category: 'Entertainment: Video Games',
      },
      {
        id: 16,
        category: 'Entertainment: Board Games',
      },
      {
        id: 17,
        category: 'Science & Nature',
      },
      {
        id: 18,
        category: 'Science: Computers',
      },
      {
        id: 19,
        category: 'Science: Mathematics',
      },
      {
        id: 20,
        category: 'Mythology',
      },
      {
        id: 21,
        category: 'Sports',
      },
      {
        id: 22,
        category: 'Geography',
      },
      {
        id: 23,
        category: 'History',
      },
      {
        id: 24,
        category: 'Politics',
      },
      {
        id: 25,
        category: 'Art',
      },
      {
        id: 26,
        category: 'Celebrities',
      },
      {
        id: 27,
        category: 'Animals',
      },
      {
        id: 28,
        category: 'Vehicles',
      },
      {
        id: 29,
        category: 'Entertainment: Comics',
      },
      {
        id: 30,
        category: 'Science: Gadgets',
      },
      {
        id: 31,
        category: 'Entertainment: Japanese Anime & Manga',
      },
      {
        id: 32,
        category: 'Entertainment: Cartoon & Animations',
      },
    ],
    difficulties: ['easy', 'medium', 'hard'],
    types: ['multiple', 'boolean'],
    amount: '5',
    category: '',
    difficulty: '',
    type: '',
  },
};

export default function settings(state = INITIAL_STATE, action) {
  switch (action.type) {
  case UPDATE_VIDEO_SETTINGS:
    return {
      ...state,
      video: { ...state.settings.video, appLogoShaking: action.payload },
    };
  case UPDATE_AUDIO_SETTINGS:
    return {
      ...state,
      audio: {
        ...state.settings.audio,
        musicOn: action.payload.musicOn,
        soundXfsOn: action.payload.soundXfsOn,
      },
    };
  case UPDATE_GAME_SETTINGS:
    return {
      ...state,
      game: {
        ...state.settings.game,
        category: action.payload.category,
        amount: action.payload.amount,
        difficulty: action.payload.difficulty,
        type: action.payload.type,
      },
    };
  default:
    return state;
  }
}
