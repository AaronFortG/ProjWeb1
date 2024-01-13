export class ApiClient {
  // Constructor to set the base URL of the API (without endpoints)
  constructor() {
    this.baseURL = 'https://balandrau.salle.url.edu/i3';
  }

  savePlayerToken(tokenValue) {
    window.localStorage.setItem('token', tokenValue);
  }

  savePlayerID(playerIDValue) {
    window.localStorage.setItem('playerID', playerIDValue);
  }

  getPlayerToken() {
    return window.localStorage.getItem('token');
  }

  getPlayerID() {
    return window.localStorage.getItem('playerID');
  }

  // Generic request method for different HTTP methods
  async request(url, method, data, token = null) {
    // Construct the full endpoint URL
    const endpoint = `${this.baseURL}/${url}`;

    // Set default headers
    const headers = {
      'Content-Type': 'application/json',
    };

    // Include Bearer token in headers if provided
    if (token != null) {
      headers['Bearer'] = token;
    }

    // Construct options object for the Fetch API
    const options = {
      method,
      headers,
    };

    // Include request body if provided
    if (data != null) {
      console.log('Body: ', data);
      options.body = JSON.stringify(data);
    }

    try {
      // Make the API request
      const response = await fetch(endpoint, options);

      // Check if the response status is OK (returned 200's family)
      if (!response.ok) {
        // If not OK, parse error response and throw an error
        const errorData = await response.json();

        // Get the 'error' nested property of the 'error' object shown when the status is not valid.
        const errorMessage = errorData.error ? errorData.error.message : 'Unknown error';

        // Show the error to the receiver.
        throw new Error(`${errorMessage}`);
      }

      // Parse and return the JSON response
      const text = await response.text();

      // Check if the answer has text to JSONIFY it or just return an empty object.
      if (text.length === 0) {
        return {};  // Return empty object or status text
      } else {
        return JSON.parse(text);
      }
    } catch (error) {
      // Handle local errors (bad request = family not 200) and network issues (fetch rejected) and log them
      console.error('Error during the request:', error);
      throw error; // Rethrow the error to be caught by the caller
    }
  }

  // Convenience methods for specific HTTP methods
  async get(url, token = null) {
    return this.request(url, 'GET', null, token);
  }

  async post(url, data, token = null) {
    return this.request(url, 'POST', data, token);
  }

  async put(url, data, token = null) {
    return this.request(url, 'PUT', data, token);
  }

  async delete(url, token = null) {
    return this.request(url, 'DELETE', null, token);
  }
}

// // Example usage:
// const api = new ApiClient('https://example.com/api');
//
// // GET request with a 2000 milliseconds (2 seconds) delay
// api.get('posts/1', null, 2000)
//   .then(data => console.log('GET Response:', data))
//   .catch(error => console.error('GET Error:', error));
//
// // POST request with data and Bearer token and a default 1000 milliseconds (1 second) delay
// api.post('posts', { title: 'New Post' }, 'yourBearerToken')
//   .then(data => console.log('POST Response:', data))
//   .catch(error => console.error('POST Error:', error));
