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

  async register(data){
    const response = await fetch('/auth/register', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    if (response_1['registered']) {
      window.location.href = '/Login';
    } else {
      return response_1['error'];
    }
  }

  async addDish(data){
    const response = await fetch('/Menu/add', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    if (response_1['Added']) {
      window.location.href = '/chef';
    } else {
      return response_1['error'];
    }
  }

async updateDish(data){
    const response = await fetch('/Menu/update', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response_1 = await response.json();
    return response_1['error'];
  }

async getMenu(){
    const response = await fetch('/Menu/getMenu', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      });
    const response_1 = await response.json();
    return response_1['dishes']
  }

async removeDish(data){
    const response = await fetch('/Menu/remove', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
        body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    if (response_1['Remove']) {
      window.location.href = '/chef';
    } else {
      return response_1['error'];
    }
  }

async getNotApprove(){
    const response = await fetch('/customerprofile/checkApprove', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      });
    const response_1 = await response.json();
    return response_1['customers']
  }

  async approveCustomer(data){
    const response = await fetch('/customerprofile/approve', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
      });
    const response_1 = await response.json();
    window.location.href = '/MyCustomers';
    
  }

  async getCustomer(){
    const response = await fetch('/customerprofile/getCustomer', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      });
    const response_1 = await response.json();
    return response_1['customers']
  }
  
}

