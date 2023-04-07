const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = date => {
  return fetch(`${baseUrl}/${date}`)
    .then(response => {
      if (!response.ok) {
        alert("Error. Can't display events");
      }
      return response.json();
    })
    .catch(() => alert("Internal Server Error. Can't display events"));
};
