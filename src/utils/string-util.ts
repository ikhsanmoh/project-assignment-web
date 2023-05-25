export const getSlug = (url: string) => url.split("/").filter(Boolean).at(-1);

export const formatNumberWithZeros = (number: number, length: number = 2) => {
  const paddedNumber = String(number).padStart(length, "0");

  return `#${paddedNumber}`;
};
