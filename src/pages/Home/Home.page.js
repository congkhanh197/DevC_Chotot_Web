import React, { lazy, Suspense, Component } from "react";
import ProductList from "../../components/ProductList";
import {
  InputGroup,
  FormControl,
  Button,
  Row,
  Col,
  Container
} from "react-bootstrap";
import { GET_AD_LISTING } from "../../api";
import { Query } from "react-apollo";
import ReactPaginate from "react-paginate";
const Map = lazy(() => import("../../components/Map"));

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      data: [],
      perPage: 20,
      currentPage: 0,
      pageCount: 10
    };
  }
  render() {
    console.log(this.state)
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
              <Query query={GET_AD_LISTING}>
                {({ loading, error, data }) => {
                  if (loading) return "Loading...";
                  if (error) return `Error! ${error.message}`;
                  if (data) {
                    return <ProductList data={data.AdListing.data} />
                    // this.setState({
                    //   data : data.AdListing.data,
                    //   offset : data.AdListing.offset +1,
                    //   currentPage: Math.ceil(data.AdListing.offset/this.state.perPage),
                    //   pageCount: Math.ceil(data.AdListing.total/this.state.perPage)
                    // })
                  }
                }}
              </Query>
              {/* <ProductList data={this.state.data} /> */}
              {/* <Row className="justify-content-md-center">
                {this.state.pageCount > 1 && (
                  <ReactPaginate
                    previousLabel={<Button>Previous</Button>}
                    nextLabel={<Button>Next</Button>}
                    breakLabel={"..."}
                    pageCount={this.state.pageCount}
                    forcePage={this.state.currentPage}
                    previousLinkClassName={"previous_page"}
                    nextLinkClassName={"next_page"}
                    breakClassName={"break-me"}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={e => {
                      console.log({ selectedPage: e.selected });
                    }}
                    containerClassName={"flex pagination"}
                    activeClassName={"active"}
                  />
                )}
              </Row> */}
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
}
export default HomePage;
