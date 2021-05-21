const isAuthenticated = async () => {
  const response = await fetch(
    // 'https://anime-test.herokuapp.com/authenticate',
    'http://localhost:1337/authenticate',
    {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    }
  );
  return (await response.text()) === 'authorized';
};

export { isAuthenticated };
