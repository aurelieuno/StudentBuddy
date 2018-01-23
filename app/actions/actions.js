export const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});

export const getSession = session => ({
  type: 'GET_SESSION',
  payload: session,
});

export const getClassInfo = info => ({
  type: 'GET_CLASS_INFO',
  payload: info,
});

export const getBadges = badges => ({
  type: 'GET_BADGES',
  payload: badges,
});

export const selectSession = session => ({
  type: 'SELECT_SESSION',
  payload: session,
});

export const getDashboard = session => ({
  type: 'GET_DASHBOARD',
  payload: session,
});

export const logOut = () => ({
  type: 'LOG_OUT',
});
