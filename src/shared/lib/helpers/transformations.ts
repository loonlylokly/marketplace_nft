export const mapArrToString = (arr: number[]) =>
  arr.filter((item) => Number.isInteger(item)).map(String);
