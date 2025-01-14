// 1. Creating a simple Error
try {
  throw new Error("Something went wrong!");
} catch (e) {
  console.log(e.message); // "Something went wrong!"
  console.log(e.name); // "Error"
  console.log(e.stack); // Stack trace (varies by environment)
}

// 2. Custom Error class
class CustomError extends Error {
  constructor(message, code) {
    super(message); // Call the parent constructor with the message
    this.name = "CustomError"; // Set the name of the error
    this.code = code; // Custom property
  }
}

try {
  throw new CustomError("Invalid input", 400);
} catch (e) {
  console.log(e.name); // "CustomError"
  console.log(e.message); // "Invalid input"
  console.log(e.code); // 400
  console.log(e.stack); // Stack trace
}

// 3. Error captureStackTrace (for better stack traces)
function createErrorWithStack() {
  const error = new Error("An error occurred");
  if (Error.captureStackTrace) {
    Error.captureStackTrace(error, createErrorWithStack);
  }
  return error;
}

try {
  throw createErrorWithStack();
} catch (e) {
  console.log(e.stack); // Captured stack trace
}

// 4. SyntaxError - Example
try {
  eval("alert('Hello)");
} catch (e) {
  if (e instanceof SyntaxError) {
    console.log("SyntaxError: " + e.message); // SyntaxError: Unexpected end of input
  }
}

// 5. TypeError - Example
try {
  null.f();
} catch (e) {
  if (e instanceof TypeError) {
    console.log("TypeError: " + e.message); // "Cannot read property 'f' of null"
  }
}

// 6. RangeError - Example
try {
  const arr = new Array(-1); // Invalid array length
} catch (e) {
  if (e instanceof RangeError) {
    console.log("RangeError: " + e.message); // "Invalid array length"
  }
}

// 7. ReferenceError - Example
try {
  console.log(nonExistentVariable);
} catch (e) {
  if (e instanceof ReferenceError) {
    console.log("ReferenceError: " + e.message); // "nonExistentVariable is not defined"
  }
}

// 8. Handling multiple error types with custom handler
function handleError(error) {
  if (error instanceof SyntaxError) {
    console.log("Caught a SyntaxError: ", error.message);
  } else if (error instanceof TypeError) {
    console.log("Caught a TypeError: ", error.message);
  } else {
    console.log("Caught a general error: ", error.message);
  }
}

try {
  throw new SyntaxError("Invalid syntax!");
} catch (e) {
  handleError(e); // Caught a SyntaxError: Invalid syntax!
}

try {
  throw new TypeError("Cannot perform action on null");
} catch (e) {
  handleError(e); // Caught a TypeError: Cannot perform action on null
}

// 9. Asynchronous Error Handling (Promise rejection)
function asyncFunction() {
  return new Promise((resolve, reject) => {
    reject(new Error("Something went wrong in async"));
  });
}

asyncFunction().catch((e) => {
  console.log(e.message); // "Something went wrong in async"
  console.log(e.name); // "Error"
});

// 10. Throwing errors based on conditions
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(4, 0)); // Will throw an error
} catch (e) {
  console.log(e.message); // "Division by zero is not allowed"
}

// 11. Error with stack trace
function functionWithError() {
  try {
    throw new Error("This is a custom error with stack trace");
  } catch (e) {
    console.log(e.stack); // Outputs the stack trace
  }
}

functionWithError();
