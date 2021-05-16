const signInButton = document.getElementsByClassName('g-signin2')[0];
const signedInLabel = document.getElementById('signedInLabel');

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

  const user = googleUser.getBasicProfile().getName();

  const xhr = new XMLHttpRequest();
  xhr.open('POST', 'http://localhost:1337/login');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = () => {
    if (xhr.responseText === 'success') {
      signInButton.style.display = 'none';
      signedInLabel.innerText = `Signed in as: ${user}`;
      signedInLabel.style.display = 'block';
    } else {
      signOut();
    }
  };
  xhr.send(
    JSON.stringify({
      token: id_token,
    })
  );
}
