import Geolocation, { GeolocationResponse } from "@react-native-community/geolocation";


export interface LocationData {
    position: {lat:number,lng:number};
    watchID?: number;
    fullPosition?:GeolocationResponse;
  }

const LocationUtil = () => {
    const subscribeLocationLocation = () => {
        return new Promise<LocationData>((resolve, reject) => {
            const watchID = Geolocation.watchPosition(
              (position : GeolocationResponse) => {
                //console.log("New position:", position);
                
                console.log(position);
                const currentLongitude = JSON.stringify(position.coords.longitude);
                //getting the Longitude from the location json
                const currentLatitude = JSON.stringify(position.coords.latitude);

                const locationData: LocationData = {
                  position: {lat:currentLatitude as any,lng:currentLongitude as any},
                  watchID,
                  fullPosition: position
                };
                resolve(locationData); // Resolve the promise with the location data
              },
              (error) => {
                console.log("Error getting position:", error);
                // Handle the error here
                reject(error); // Reject the promise with the error
              },
              { enableHighAccuracy: false, maximumAge: 1000 }
            );
          });
      };

      const getOneTimeLocation = () => {
        return new Promise<LocationData>((resolve, reject) => {
            Geolocation.getCurrentPosition(
                //Will give you the current location
                (position) => {
                  //setLocationStatus('You are Here');
                  const currentLongitude = JSON.stringify(position.coords.longitude);
                  //getting the Longitude from the location json
                  const currentLatitude = JSON.stringify(position.coords.latitude);
                  //getting the Latitude from the location json
                  const locationData: LocationData = {
                    position: {lat:currentLatitude as any,lng:currentLongitude as any},
                    fullPosition: position
                  };
                  resolve(locationData); // Resolve the promise with the location data
                },
                (error) => {
                    console.log("Error getting position:", error);
                    // Handle the error here
                    reject(error); // Reject the promise with the error
                },
                {enableHighAccuracy: false, timeout: 30000, maximumAge: 1000},
              );
        });
        
      };
    return {subscribeLocationLocation,getOneTimeLocation}
}

export default LocationUtil;