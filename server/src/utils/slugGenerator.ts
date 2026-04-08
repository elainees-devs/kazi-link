// Generate slug dynamically from job title
export const generateSlug = (text: string) => {
  return text
    .toLowerCase() // lowercase
    .trim() // remove whitespace
    .replace(/[^a-z0-9\s-]/g, "") // remove invalid chars
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove consecutive hyphens
};