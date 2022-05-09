export const getCurrentGEO = () => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { longitude, latitude } }) => {
        resolve({ longitude, latitude });
      },
      (e) => {
        reject(e);
      },
      { enableHighAccuracy: true }
    );
  });
};
