const signInButton = document.getElementsByClassName('g-signin2')[0];
const signedInLabel = document.getElementById('signedInLabel');

function getCookie(cname) {
  const name = `${cname}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

function signOut() {
  // eslint-disable-next-line no-undef
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    signedInLabel.style.display = 'none';
    signInButton.style.display = 'block';
    document.cookie =
      'session-token= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
    document.cookie = 'user= ; expires = Thu, 01 Jan 1970 00:00:00 GMT';
  });
}

// eslint-disable-next-line no-unused-vars
function onSignIn(googleUser) {
  // eslint-disable-next-line camelcase
  const { id_token } = googleUser.getAuthResponse();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', '/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.responseText === 'success') {
      signedInLabel.innerText = `Sign in as: ${getCookie('user')}`;
      signedInLabel.style.display = 'block';
    } else {
      signOut();
    }
  };
  xhr.send(
    JSON.stringify({
      token: id_token,
      userEntity: googleUser.getBasicProfile().getName(),
    })
  );
}

function checkIfLoggedIn() {
  const sessionToken = getCookie('session-token');
  if (sessionToken !== '') {
    const user = getCookie('user');
    signInButton.style.display = 'none';
    signedInLabel.innerText = `Sign in as: ${user}`;
    signedInLabel.style.display = 'block';
  }
}

checkIfLoggedIn();
