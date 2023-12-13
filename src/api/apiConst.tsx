/** Version parameter for endpoint URL */
const VERSION_URL = "/api/v1";

/** Private endpoint URLs */
const AUTH_URL = VERSION_URL + "/auth";

/**
 * Enum with all api endpoints
 * @readonly
 * @enum {string}
 */
export const Endpoints = Object.freeze({
  AUTH: AUTH_URL,
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
