module.exports.checkString = (value) => {
  return (typeof value === 'string' || value instanceof String);
}