export const removeWhiteSpace = (str) => {
  if (str && typeof str === "string") {
    return str.replace(/\s+/g, " ").trim();
  } else {
    return str;
  }
};
