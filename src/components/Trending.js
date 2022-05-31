import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import duneImage from "../assets/images/trending/dune.jpg";
import infiniteImage from "../assets/images/trending/infinite.jpg";
import everythingImage from "../assets/images/trending/everything.jpg";
import jokerImage from "../assets/images/trending/joker.jpg";
import lightyearImage from "../assets/images/trending/lightyear.jpg";
import morbiusImage from "../assets/images/trending/morbius.jpg";

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <h2 className="text-white text-center" id="trending">
          TRENDING MOVIES
        </h2>
        <hr className="border" />
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={duneImage} alt="Dune Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">DUNE</Card.Title>
                  <Card.Text className=" text-left">Dune bercerita tentang manusia di masa depan tepatnya 20 ribu tahun kemudian yang hidup di planet yang berbeda.</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={infiniteImage} alt="Infinite Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Infinite Storm</Card.Title>
                  <Card.Text className=" text-left">INFINITE STORM berkisah mengenai seorang pendaki bernama Pam Bales yang memulai pendakian di gunung Washinton yang bersalju. </Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={everythingImage} alt="Everything Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Everything Everywhere All at Once</Card.Title>
                  <Card.Text className=" text-left">menceritakan seorang warga Amerika keturunan China bernama Evelyn Wang.</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={jokerImage} alt="Joker Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Joker</Card.Title>
                  <Card.Text className=" text-left">Arthur Fleck, seorang badut pesta, hidup dalam keadaan sulit bersama ibunya yang sakit-sakitan. Karena orang-orang menganggapnya aneh</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={lightyearImage} alt="Lightyear Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Light Year</Card.Title>
                  <Card.Text className=" text-left">mengisahkan tentang perjalanan ke luar angkasa yang dilakukan Kapten Unit Perlindungan Alam Semesta, Buzz Lightyear. </Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={morbiusImage} alt="Morbius Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Morbius</Card.Title>
                  <Card.Text className=" text-left">Ahli biokimia mencoba menyembuhkan dirinya sendiri dari penyakit darah langka, namun tidak sengaja ia menginfeksi tubuhnya menjadi vampir</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
