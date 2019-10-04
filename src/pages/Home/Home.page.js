import React, { lazy, Suspense, useState } from "react";
import ProductList from "../../components/ProductList";
import { 
  Button,
  Row, 
  Col, 
  Container, 
  Pagination, 
  Image, 
  Modal, 
  Form, 
  ListGroup 
} from "react-bootstrap";
import Loading from "../../components/Loading";
import { GET_AD_LISTING } from "../../api";
import { useQuery } from "@apollo/react-hooks";
const Map = lazy(() => import("../../components/Map"));

const recommend_female = require("../../data/recommend_female.json");
const recommend_male = require("../../data/recommend_male.json");

function HomePage(props) {
  const [showModal, setShowModal] = useState(false);
  const [birthYeah, setBirthYeah] = useState(null);
  const [sex, setSex] = useState(null);

  const recommend_data = sex === "Nam" ? recommend_male : recommend_female;

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);
  const [area, setArea] = useState(null);
  const { loading, error, data, refetch } = useQuery(GET_AD_LISTING, {
    variables: {
      o: 0,
      limit: 12,
      area
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
            <>
              {loading && <Loading />}
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
          <Map
            setArea={setArea}
            onAdClick={list_id => () => {
              props.history.push(list_id.toString());
            }}
          />
        </Suspense>
      </div>
      <div
        style={{ position: "fixed", right: 50, bottom: 50, zIndex: 100000 }}
        onClick={handleShow}
      >
        <Image
          style={{ width: 100, height: 100 }}
          src="https://photo.tinhte.vn/store/2014/11/2637121_icon.png"
          thumbnail
          roundedCircle
        />
      </div>
      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Gợi ý hướng nhà theo năm sinh</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridCity">
                <Form.Control
                  as="select"
                  placeholder={"1"}
                  onChange={e => setSex(e.target.value)}
                >
                  <option value="" disabled selected>
                    Chọn giới tính của bạn
                  </option>
                  <option>Nam</option>
                  <option>Nữ</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridState">
                <Form.Control
                  as="select"
                  onChange={e => setBirthYeah(e.target.value)}
                >
                  <option value="" disabled selected>
                    Chọn năm sinh của bạn
                  </option>
                  {(() => {
                    let i = 1949;
                    let result = [];
                    for (; i <= 2019; i++) {
                      result = [...result, <option key={i}>{i}</option>];
                    }
                    return result;
                  })()}
                </Form.Control>
              </Form.Group>
            </Form.Row>
          </Form>
          {sex && birthYeah && (
            <Container>
              {(() => {
                const data = recommend_data.find(
                  item =>
                    item["Thông tin chung cho bạn sinh năm "] === birthYeah
                );
                if (!data) return <Row>Không tìm thấy dữ liệu</Row>;
                return (
                  <>
                    <Row>
                      {(sex === "Nam" ? "Nam mạng" : "Nữ mạng") +
                        " - Sinh năm: " +
                        birthYeah}
                    </Row>
                    <Row>
                      {" Mệnh : " +
                        data[" Mệnh : "] +
                        ", Cung : " +
                        data["Cung : "]}
                    </Row>
                    <Row>
                      {"Hướng tốt:"}
                      <ListGroup>
                        {Object.entries(data["Hướng tốt"]).map(
                          ([key, value]) => (
                            <ListGroup.Item>{key + value}</ListGroup.Item>
                          )
                        )}
                      </ListGroup>
                    </Row>
                    <Row>
                      {"Hướng xấu:"}
                      <ListGroup>
                        {Object.entries(data["Hướng xấu"]).map(
                          ([key, value]) => (
                            <ListGroup.Item>{key + value}</ListGroup.Item>
                          )
                        )}
                      </ListGroup>
                    </Row>
                  </>
                );
              })()}
            </Container>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

export default HomePage;
