const apiUrl = 'https://app-timer-api-sonxdvzrno.now.sh';

export const login = ({ email, password }) => {
  const url = `${apiUrl}/account/login`;
  const options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
      password
    })
  };

  return fetch(url, options);
}