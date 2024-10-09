export const LimitCharacters = (name: string) => {
  return name.length > 8 ? `${name.slice(0, 12)}` : name;
};