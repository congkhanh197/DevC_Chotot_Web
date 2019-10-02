import gql from "graphql-tag";

export const GET_AD_LISTING = gql`
  query getAdListing($o: Int!, $limit: Int!) {
    AdListing(o:$o, limit:$limit) @rest(type: "AdListing", path: "ad-listing?{args}") {
      data
      total
      limit
      offset
    }
  }
`;