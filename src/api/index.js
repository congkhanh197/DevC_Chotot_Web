import gql from "graphql-tag";

export const GET_AD_LISTING = gql`
  query getAdListing($o: Int!, $limit: Int!, $area: Int, $q: String) {
    AdListing(o: $o, limit: $limit, area: $area, q: $q)
      @rest(type: "AdListing", path: "ad-listing?{args}") {
      data
      total
      limit
      offset
    }
  }
`;
