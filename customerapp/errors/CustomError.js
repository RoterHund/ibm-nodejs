/**
 * Custom Error Class: ValidationError
 *
 * Represents an error that occurs when validation fails.
 * Inherits from the built-in Error class.
 */

/** 
 *ValidationError is created and thrown when the data provided 
 *for user registration is not acceptable as explained in above 
 * - Age less than 21 or if the username already exists in the database.
*/
  class ValidationError extends Error {
    constructor(message) {
        // Call the constructor of the parent class (Error)
        super(message);

        // Custom properties for the ValidationError
        this.code = 407; // Custom error code
        this.name = "ValidationError"; // Custom error name
    }
}

/**
 * Custom Error Class: InvalidUserError
 *
 * Represents an error that occurs when dealing with an invalid user.
 * Inherits from the built-in Error class.
 * 
 * InvalidUserError is created and thrown 
 * when the username is invalid during the login attempt.

 */
class InvalidUserError extends Error {
    constructor(message) {
        // Call the constructor of the parent class (Error)
        super(message);

        // Custom properties for the InvalidUserError
        this.code = 407; // Custom error code
        this.name = "InvalidUserError"; // Custom error name
    }
}

/**
 * Custom Error Class: AuthenticationFailed
 *
 * Represents an error that occurs when authentication fails.
 * Inherits from the built-in Error class.
 * 
 * AuthenticationFailed is also an error though 
 * it doesn't have the word Error as it inherits 
 * from the Error class. It is thrown when the password 
 * is invalid while a login attempt is made.
 */
class AuthenticationFailed extends Error {
    constructor(message) {
        // Call the constructor of the parent class (Error)
        super(message);

        // Custom properties for the AuthenticationFailed error
        this.code = 407; // Custom error code
        this.name = "AuthenticationFailed"; // Custom error name
    }
}

module.exports = { ValidationError, InvalidUserError, AuthenticationFailed};