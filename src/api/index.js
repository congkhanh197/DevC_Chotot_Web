import gql from "graphql-tag";

export const GET_AD_LISTING = gql`
  query getAdListing {
    AdListing @rest(type: "AdListing", path: "ad-listing") {
      data
      total
    }
  }
`;
