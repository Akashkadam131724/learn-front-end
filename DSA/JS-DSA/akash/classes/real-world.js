const axios = require("axios");

class UserManager {
  constructor() {
    this.users = [];
  }

  // Fetch user from external API and store it locally
  async fetchAndStoreUser(userId) {
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );
      const user = response.data;
      this.users.push(user);
      return user;
    } catch (error) {
      console.error("Error fetching user:", error);
    }
  }

  // Fetch all local users
  getAllUsers() {
    return this.users;
  }

  // Find user locally by ID
  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }
}

// Example usage
(async () => {
  const userManager = new UserManager();

  // Fetch user from API and store it
  await userManager.fetchAndStoreUser(1);

  // Fetch another user
  await userManager.fetchAndStoreUser(2);

  console.log("All Users:", userManager.getAllUsers());
  console.log("User with ID 1:", userManager.getUserById(1));
})();
