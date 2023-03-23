const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = date => {
  return fetch(`${baseUrl}/${date}`)
    .then(response => {
      if (!response.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
      return response.json();
    })
    .catch(error => alert(error));
};
