export const SAVE_TOKEN = 'SAVE_TOKEN';
export const ADD_GRAVATAR_PICTURE = 'ADD_GRAVATAR_PICTURE';
export const ADD_LOGIN = 'ADD_LOGIN';
export const ADD_TOKEN = 'ADD_TOKEN';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_CORRECT_ANSWERS = 'UPDATE_CORRECT_ANSWERS';
export const UPDATE_VIDEO_SETTINGS = 'UPDATE_VIDEO_SETTINGS';
export const UPDATE_AUDIO_SETTINGS = 'UPDATE_AUDIO_SETTINGS';
export const UPDATE_GAME_SETTINGS = 'UPDATE_GAME_SETTINGS';

export const saveToken = (payload) => ({
  type: SAVE_TOKEN, payload,
});

export const addLogin = (payload) => ({
  type: ADD_LOGIN, payload,
});

export const addToken = (token) => ({
  type: ADD_TOKEN, token,
});

export const addGravatarPicture = (picture) => ({
  type: ADD_GRAVATAR_PICTURE, picture,
});

export const updateScore = (payload) => ({
  type: UPDATE_SCORE, payload,
});

export const updateCorrectAnswers = (payload) => ({
  type: UPDATE_CORRECT_ANSWERS, payload,
});

export const updateVideoSettings = (payload) => ({
  type: UPDATE_VIDEO_SETTINGS, payload,
});

export const updateAudioSettings = (payload) => ({
  type: UPDATE_AUDIO_SETTINGS,
  payload,
});

export const updateGameSettings = (payload) => ({
  type: UPDATE_GAME_SETTINGS,
  payload,
});
