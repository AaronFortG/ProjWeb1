class ApiClient {
  // Constructor to set the base URL of the API (without endpoints)
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  // Generic request method for different HTTP methods
  async request(url, method, data, token = null, delay = 1000) {
    // Construct the full endpoint URL
    const endpoint = `${this.baseURL}/${url}`;

    // Set default headers
    const headers = {
      'Content-Type': 'application/json',
    };

    // Include Bearer token in headers if provided
    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    // Construct options object for the Fetch API
    const options = {
      method,
      headers,
    };

    // Include request body if provided
    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      // Make the API request
      const response = await fetch(endpoint, options);

      // Check if the response status is OK
      if (!response.ok) {
        // If not OK, parse error response and throw an error
        const errorData = await response.json();
        throw new Error(`HTTP error! Status: ${response.status}, Message: ${errorData.message}`);
      }

      // Wait for the specified delay before resolving the promise
      await new Promise(resolve => setTimeout(resolve, delay));

      // Parse and return the JSON response
      return response.json();
    } catch (error) {
      // Handle errors and log them
      console.error('Error during the request:', error);
      throw error;
    }
  }

  // Convenience methods for specific HTTP methods
  async get(url, token = null, delay = 1000) {
    return this.request(url, 'GET', null, token, delay);
  }

  async post(url, data, token = null, delay = 1000) {
    return this.request(url, 'POST', data, token, delay);
  }

  async put(url, data, token = null, delay = 1000) {
    return this.request(url, 'PUT', data, token, delay);
  }

  async delete(url, token = null, delay = 1000) {
    return this.request(url, 'DELETE', null, token, delay);
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
