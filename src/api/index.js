import axios from "axios";

const baseUrl = "http://localhost:5000";

const getHomepageAd = (response, error) => {
    return axios
      .get(baseUrl + "/ad-listing")
      .then(response)
      .catch(error);
//   return fetch(baseUrl + "/ad-listing")
//     .then(function(response) {
//       return response.json();
//     })
//     .then(function(json) {
//       console.log("parsed json", json);
//     });
  // .catch(function(ex) {
  //   console.log("parsing failed", ex);
  // });
};

export { getHomepageAd };
