import { Container, Row, Col, Button } from "react-bootstrap";
const Intro = () => {
  return (
    <div className="intro">
      <Container className="text-white d-flex justify-content-center align-items-center ">
        <Row>
          <Col>
            <div className="title">WHEREVER YOU ARE</div>
            <div className="title">KEEP WATCHING</div>
            <div className="introButton">
              <Button variant="dark">See List</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
