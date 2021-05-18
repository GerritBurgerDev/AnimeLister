const signInButton = document.getElementsByClassName('g-signin2')[0];
const signedInLabel = document.getElementById('signed-in-label');
const signedInControls = document.getElementById('signed-in-controls');

function signOut() {
  // eslint-disable-next-line no-undef
  const auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(() => {
    fetch('http://localhost:1337/logout', {
      method: 'GET',
      mode: 'cors',
      credentials: 'include',
    }).then(() => {
      signedInLabel.innerText = '';
      signedInControls.style.display = 'none';
      signInButton.style.display = 'block';
      window.location = '/';
    });
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
  xhr.withCredentials = true;
  xhr.onload = () => {
    if (xhr.responseText === 'success') {
      signInButton.style.display = 'none';
      signedInLabel.innerText = `Welcome, ${user}`;
      signedInControls.style.display = 'flex';
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
