const truncateString = (str, num = 100) => {
  if (str.length <= num) return str;
  return str.slice(0, num) + "...";
};

export default truncateString;
