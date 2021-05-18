const isAuthenticated = async () => {
  const response = await fetch('http://localhost:1337/authenticate', {
    method: 'GET',
    mode: 'cors',
    credentials: 'include',
  });
  return (await response.text()) === 'authorized';
};

export { isAuthenticated };
