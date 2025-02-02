const API_URL = {
  JOIN: 'v1/auth/signup',
  LOGIN: '/v1/auth/login',
  REFRESH: '/v1/auth/refresh',
  PROBLEM_LIST: '/v1/problems',
  USER_INFO: '/v1/auth/info',
  USER_LIST: '/v1/users',
  STATS: 'v1/stats',
  UPLOAD_IMG: 'v1/upload/image',
  CORE_TECH: 'v1/techs',
  MAJOR: 'v1/majors',
  SEND_CHANGE_PASSWORD_EMAIL: 'v1/auth/password/code',
  CHANGE_PASSWORD: 'v1/auth/password/change',
};

const API_URL_WITH_PARAMS = {
  USER_DETAIL: (user_id: string) => `/v1/users/${user_id}`,
  LONG_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/long/${problem_id}`,
  SHORT_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/short/${problem_id}`,
  MULTIPLE_PROBLEM_DETAIL: (problem_id: string) => `/v1/problems/multiple/${problem_id}`,
  LONG_PROBLEM_RESULT: (problem_id: string) => `/v1/problems/long/${problem_id}/grade`,
  SHORT_PROBLEM_RESULT: (problem_id: string) => `/v1/problems/short/${problem_id}/grade`,
  MULTIPLE_PROBLEM_RESULT: (problem_id: string) => `/v1/problems/multiple/${problem_id}/grade`,
  UPDATE_USER: (user_id: string) => `/v1/users/${user_id}`,
  USER_STATS: (user_id: string) => `/v1/users/${user_id}/stats`,
  USER_INFO: (user_id: string) => `/v1/users/${user_id}`,
  ASSESSMENT: (problem_id: string) => `/v1/problems/grade/${problem_id}/assessment`,
};

export { API_URL, API_URL_WITH_PARAMS };
