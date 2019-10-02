import React, { lazy, Suspense } from "react";
import ProductList from "../../components/ProductList";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container,
  Pagination
} from "react-bootstrap";
import { GET_AD_LISTING } from "../../api";
import { useQuery } from "@apollo/react-hooks";
const Map = lazy(() => import("../../components/Map"));

function HomePage(props) {
  const { loading, error, data, refetch } = useQuery(GET_AD_LISTING, {
    variables: {
      o: 0,
      limit: 12
    }
  });
  const pageCount = data
    ? Math.ceil(data.AdListing.total / data.AdListing.limit)
    : 0;
  const currentPage = data
    ? Math.ceil(data.AdListing.offset / data.AdListing.limit) + 1
    : 1;
  return (
    <>
      <Row style={{ marginTop: 56 }}>
        <Col>
          <Container>
            <Row style={{ padding: "10px" }}>
              <InputGroup>
                <FormControl aria-describedby="basic-addon1" />
                <InputGroup.Append>
                  <Button variant="outline-secondary">Search</Button>
                </InputGroup.Append>
              </InputGroup>
            </Row>
            <>
              {loading && <div>"Loading..."</div>}
              {error && <div>{`Error! ${error.message}`}</div>}
              {data && (
                <ProductList
                  data={data.AdListing.data}
                  onAdClick={list_id => () =>
                    props.history.push(list_id.toString())}
                />
              )}
            </>
            <Row className="justify-content-md-center">
              {pageCount > 1 && (
                <Pagination>
                  <Pagination.First
                    disabled={currentPage === 1}
                    onClick={() =>
                      refetch({
                        o: 0,
                        limit: 12
                      })
                    }
                  />
                  <Pagination.Prev
                    disabled={currentPage === 1}
                    onClick={() =>
                      refetch({
                        o: (currentPage - 2) * 12,
                        limit: 12
                      })
                    }
                  />
                  <Pagination.Item active>{currentPage}</Pagination.Item>
                  <Pagination.Next
                    disabled={currentPage === pageCount}
                    onClick={() =>
                      refetch({
                        o: currentPage * 12,
                        limit: 12
                      })
                    }
                  />
                  <Pagination.Last
                    disabled={currentPage === pageCount}
                    onClick={() =>
                      refetch({
                        o: data.AdListing.total - 12,
                        limit: 12
                      })
                    }
                  />
                </Pagination>
              )}
            </Row>
          </Container>
        </Col>
        <Col></Col>
      </Row>
      <div style={{ position: "fixed", width: "50%", right: 0, top: 56 }}>
        <Suspense fallback={<div>Loading...</div>}>
          <Map />
        </Suspense>
      </div>
    </>
  );
}

export default HomePage;
