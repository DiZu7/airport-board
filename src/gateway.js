const baseUrl = 'https://api.iev.aero/api/flights';

export const fetchFlightsList = date => {
  return fetch(`${baseUrl}/${date}`).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
    return response.json();
  });
};

// {
//   ID: '2000043783676',
//   timeDepShedule: '2022-01-10T03:40:00Z',
//   airportToID: {
//     city_en: 'Warsaw',
//   },
//   fltNo: '756',
//   term: 'A',
//   status: 'DP',
// },
