const axios = require("axios");

// User class to interact with an external API
class User {
  constructor(userId) {
    this.userId = userId;
  }

  // Method to fetch user details from a public API
  async getUserDetails() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.userId}`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user details:", error);
    }
  }

  // Method to fetch user's posts from a public API
  async getUserPosts() {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${this.userId}/posts`
      );
      return response.data;
    } catch (error) {
      console.error("Error fetching user posts:", error);
    }
  }
}
