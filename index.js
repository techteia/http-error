'use strict';

const generate = (id='UNKNOWN ERROR',status=null,message=null) => {
  let error = {
    id: id.toUpperCase(),
    status: status,
    message: message,
    data: null,
  };
  switch (error.id) {
    case 'ECONNREFUSED':
      error.id = 'Service Unavailable';
      error.status = 503;
      error.message = 'The server is unavailable or not responding.';
      break;
    case 'EXPIRED TOKEN':
      // error.id = 'UNAUTHORIZED';
      error.status = 401;
      error.message = 'The request requires user authentication.';
      break;
    case 'INVALID TOKEN':
      // error.id = 'UNAUTHORIZED';
      error.status = 401;
      error.message = 'Invalid or expired token provided.';
      // error.message = 'The request requires user authentication.';
      break;
    case 'INVALID USER':
    case 'INVALID PASSWORD':
      // error.status     = 400;
      // error.message      = "The user email is incorrect.";
      // // error.description = "Authentication failed (user not found)...";
      // break;

      // error.status     = 404;
      // error.message      = "The password is incorrect.";
      // // error.description = "Authentication failed (password incorrect)...";
      // break;
      error.id = 'INVALID CREDENTIALS';
      error.status = 400;
      error.message = 'The user email or password is incorrect.';
      break;
    case 'INVALID HEADERS':
      error.status = 400;
      error.message = 'Required header(s) are invalid or missing.';
      break;
    case 'INVALID HEADERS':
      error.status = 400;
      error.message = 'Required header(s) are invalid or missing.';
      break;
    case 'USER VALIDATION FAILED':
      error.status = 400;
      error.message = 'The email entered is invalid.';
      break;
    case 'PASSWORD VALIDATION FAILED':
      error.status = 400;
      error.message = 'The password does not meet the required criteria.';
      break;
    case 'UNAUTHORIZED':
      error.status = 401;
      error.message = 'The request requires user authentication.';
      break;
    case 'USER TAKEN':
      error.status = 409;
      error.message = 'The user email is already taken.';
      break;
    default:
      error.id = 'UNKNOWN ERROR';
      error.status = 400;
      error.message = 'Unknown authentication error.';
      break;
  }
  error = {...error, data: { error: error.id, message: error.message } };
  return error;
};

module.exports = {
  generate,
};
