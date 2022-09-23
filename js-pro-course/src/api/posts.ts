export const fetchResponse = async (searchText: string, offset: number) => {
  const promise = await fetch(`https://studapi.teachmeskills.by/blog/posts/?limit=6&search=${searchText}&offset=${offset}`);
  const promiseJson = await promise.json();

  return promiseJson;
}