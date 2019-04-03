export const isUserLogged = async(_user) => {
  // TODO: get the token and check if it is valid.
  const user = await _user;
  return (user && user.token);
};
