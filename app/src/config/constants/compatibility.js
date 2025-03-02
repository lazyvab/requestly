// FEATURE COMPATIBILITY VERSIONS
import { CONSTANTS as GLOBAL_CONSTANTS } from "@requestly/requestly-core";
import FEATURES from "./sub/features";

// set null if the version is never compatiable on appMode
export const FEATURE_COMPATIBLE_VERSION = {
  [FEATURES.RESPONSE_MAP_LOCAL]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "0.0.29-beta",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.REDIRECT_MAP_LOCAL]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.4.21",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.ASYNC_MODIFY_RESPONSE_BODY]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.SERVE_RESPONSE_WITHOUT_REQUEST]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.5.4",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: "23.6.5",
  },
  [FEATURES.ASYNC_MODIFY_REQUEST_BODY]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.DESKTOP_APP_TERMINAL_PROXY]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.1.0",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.DESKTOP_APP_SSL_PROXYING]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.EXTENSION_GROUP_PIN_ICON]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: "22.0.0",
  },
  [FEATURES.EXTENSION_CONSOLE_LOGGER]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: "22.5.8",
  },
  [FEATURES.DESKTOP_USER_PREFERENCES]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.4.19",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.NETWORK_SESSIONS]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.5.2",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: null,
  },
  [FEATURES.API_CLIENT]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: "1.5.0",
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: "23.5.9",
  },
  [FEATURES.SESSION_ONBOARDING]: {
    [GLOBAL_CONSTANTS.APP_MODES.DESKTOP]: null,
    [GLOBAL_CONSTANTS.APP_MODES.EXTENSION]: "23.7.10",
  },
};
