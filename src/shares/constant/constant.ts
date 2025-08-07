export enum API_STATUS {
  LOADING = "loading",
  SUCCESS = "success",
  FAILURE = "failure",
}

export enum NOTIFICATION_TYPE {
  SUCCESS = "success",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

export enum FORMAT_DATE {
  DATE_COMMA = "YYYY-MM-DD",

  DATE_YEAR = "YYYY",

  DATE_MONTH = "YYYY/MM",

  DATE = "YYYY/MM/DD",

  DATE_TIME = "YYYY/MM/DD HH:mm:ss",

  DATE_JP = "YYYY年MM月",

  DATE_YEAR_MONTH = "YYYYMM",

  DATE_HOURS_MINUTE = "YYYY/MM/DD HH:mm",

  MONTH_DATE = "MM/DD",
}

export const COLOR = {
  50: "#e0f1ff",
  100: "#b0d2ff",
  200: "#7fb0ff",
  300: "#4d8bff",
  400: "#1e79fe",
  500: "#076ee5",
  600: "#0062b3",
  700: "#004f81",
  800: "#003650",
  900: "#001620",
  borderColor: "#E7EAF3B2",
};

const path = (root: string, sublink: string) => {
  return `${root}${sublink}`;
};

export const ROOTS_LANDING = "/";

const HISTORY = '/history';
const MINIGAME = '/mini-game-management';
const ACCOUNT = '/account-management';
export const HISTORY_DASHBOARD = {
  ROOT: HISTORY,
  CURRENT_PLAY: path(HISTORY, "/current-play"),
  DTC_TO_PLAY: path(HISTORY, "/dtc-to-playturn"),
  PLAY_TURN: path(HISTORY, "/play-turn"),
}

export const MINI_GAME = {
  ROOT: MINIGAME,
  CONDITION_CONFIG: path(MINIGAME, '/condition-config'),
  CONTENT_CONFIG: path(MINIGAME, '/content-config'),
  COUNTDOWN_CONFIG: path(MINIGAME, '/countdown-config'),
  POINT_CONFIG: path(MINIGAME, '/point-config'),
  QUANTITY_CONFIG: path(MINIGAME, '/quantity-config'),
  UPDATE_PLAY: path(MINIGAME, '/update-play-turn'),
}

export const ACCOUNT_MANAGEMENT = {
  ROOT: ACCOUNT,
  ADMIN_LIST: path(ACCOUNT, '/admin-list'),
  USER_LIST: path(ACCOUNT, '/user-list'),
  ROLE_MANAGEMENT: path(ACCOUNT, '/role-management'),
}

