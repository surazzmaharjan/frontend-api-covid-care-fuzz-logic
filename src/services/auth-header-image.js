export default function authHeaderImage() {
  const user = JSON.parse(localStorage.getItem('user'));

  if (user && user.accessToken) {
    // return { Authorization: 'Bearer ' + user.accessToken }; // for Spring Boot back-end
    return { 'x-access-token': user.accessToken ,'content-type': 'multipart/form-data' };       // for Node.js Express back-end
  } else {
    return {};
  }
}