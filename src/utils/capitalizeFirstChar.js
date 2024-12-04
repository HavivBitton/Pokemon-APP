function capitalizeFirstChar(str) {
  if (!str) return ""; // Handle empty or null strings
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalizeFirstChar;
