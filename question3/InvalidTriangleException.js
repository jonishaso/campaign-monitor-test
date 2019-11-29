function InvalidTriangleException(message) {
  this.name = "InvalidTriangleException";
  this.message = message;
}
InvalidTriangleException.prototype = Object.create(Error.prototype);
InvalidTriangleException.prototype.constructor = InvalidTriangleException;

module.exports = InvalidTriangleException;