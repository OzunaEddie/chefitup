import Cookies from 'universal-cookie';

export default class API {
  async logIn(data){
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['authenticated']) {
      const cookies = new Cookies();
      cookies.set('token', response_1['token'], { path: '/' });
      window.location.href = response_1['path'];
    } else {
      return response_1['error'];
    }
  }

}
