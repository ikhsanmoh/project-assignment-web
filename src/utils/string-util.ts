export const getSlug = (url: string) => url.split("/").filter(Boolean).at(-1);
