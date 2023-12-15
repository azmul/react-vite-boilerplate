/** Version parameter for endpoint URL */
const VERSION_URL = "/api/v1";

/** endpoint URLs */
const AUTH_URL = VERSION_URL + "/auth";
const USERS_URL = VERSION_URL + "/users";
const RFID_USERS_URL = VERSION_URL + "/rfid-users";
const ROLES_URL = VERSION_URL + "/roles";
const ACTIONS_URL = VERSION_URL + "/actions";
const USER_ROLE_URL = VERSION_URL + "/user-role";
/**
 * Enum with all api endpoints
 * @readonly
 * @enum {string}
 */
export const Endpoints = Object.freeze({
  AUTH: AUTH_URL,
  USERS: USERS_URL,
  ROLES: ROLES_URL,
  ACTIONS: ACTIONS_URL,
  USER_ROLE: USER_ROLE_URL,
  RFID_USERS: RFID_USERS_URL,
});

/**
 * API response status codes enum
 * @readonly
 * @enum {number}
 */
export const ResponseStatus = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  UNAUTHORIZED: 401,
  TOKEN_EXPIRED: 403,
  NOT_FOUND: 404,
  DENIED: 412,
  REDIRECT: 503,
});

/**
 * Default amount of record per page from API
 *
 */
export const DEFAULT_RESULTS_PER_PAGE = 20;
export const DEFAULT_ALL_RESULTS_PER_PAGE = 60;
export const PER_PAGE_SIZE = 20;

export const DEFAULT_API_PARAMS = {
  limit: DEFAULT_RESULTS_PER_PAGE,
  page: 1,
};
