export const routes = [{ path: 'HomePage' }, { path: 'Home' }, { path: 'About' }];

export const getRoute = (value, key = 'key') =>
  routes.find((obj) => (obj[key] === value ? obj : null));
