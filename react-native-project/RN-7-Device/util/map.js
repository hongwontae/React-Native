const API_KEY = "AIzaSyBT2EEB8bYlAegJblbZslJ03q6FXL7YFfM";

export function map(LATITUDE, LONGITUDE) {
  const gooleMap = `https://maps.googleapis.com/maps/api/staticmap?center=${LATITUDE},${LONGITUDE}&zoom=14&size=400x200&roadmap&markers=color:red%7Clabel:S%7C${LATITUDE},${LONGITUDE}&key=${API_KEY}`;
  return gooleMap;
}

export async function reverseGeolocation(lat, lng){
  const response = await 
  fetch('https://maps.googleapis.com/maps/api/geocode/json?latlng=40.714224,-73.961452&key=AIzaSyBT2EEB8bYlAegJblbZslJ03q6FXL7YFfM');

  if(!response.ok){
    throw new Error('요청 실패')
  }
  const resData = await response.json();
  return resData.results[0]
}