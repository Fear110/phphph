class Http {
  
  constructor() {
    this.baseUrl = env.BE_BASE_URL;
  }

  async postSignUpData(request) {
    const url = `${this.baseUrl}/sign-up`;
    const response = await fetch(url,
      {
        method: 'POST', 
        mode: 'cors',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
        body: JSON.stringify(request) 
      });
      return response.json();
  }
}