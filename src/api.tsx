// eslint-disable-next-line
const API_URL = `https://bloggy-api.herokuapp.com/`;

export const request = (url: string) => {
  const data = fetch(`${API_URL}${url}`)
    .then(response => {
      if (!response.ok) {
        throw new Error();
      }

      return response.json();
    });

  return data;
};
