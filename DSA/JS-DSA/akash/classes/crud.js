class UserManager {
  constructor() {
    this.users = [];
  }

  // Method to create a new user
  createUser(name, email) {
    const user = {
      id: this.users.length + 1,
      name: name,
      email: email,
    };
    this.users.push(user);
    return user;
  }

  // Method to fetch all users
  getAllUsers() {
    return this.users;
  }

  // Method to find a user by ID
  getUserById(id) {
    return this.users.find((user) => user.id === id);
  }

  // Method to update user details
  updateUser(id, name, email) {
    const user = this.getUserById(id);
    if (user) {
      user.name = name;
      user.email = email;
      return user;
    } else {
      return null;
    }
  }

  // Method to delete a user
  deleteUser(id) {
    const index = this.users.findIndex((user) => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    } else {
      return null;
    }
  }
}

// Example usage
const userManager = new UserManager();

// Creating users
const user1 = userManager.createUser("John Doe", "john@example.com");
const user2 = userManager.createUser("Jane Smith", "jane@example.com");

console.log("All Users:", userManager.getAllUsers());

// Fetching a user by ID
console.log("User with ID 1:", userManager.getUserById(1));

// Updating a user
console.log(
  "Updated User:",
  userManager.updateUser(1, "John Updated", "johnupdated@example.com")
);

// Deleting a user
console.log("Deleted User:", userManager.deleteUser(2));

// Final list of users
console.log("All Users after deletion:", userManager.getAllUsers());
