import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";
import antmanImages from "../assets/images/superhero/antman.jpg";
import avengerImages from "../assets/images/superhero/avenger.jpg";
import batmanImages from "../assets/images/superhero/batman.jpg";
import robinhoodImages from "../assets/images/superhero/robinhood.jpg";
import spidermanImages from "../assets/images/superhero/spiderman-cover.jpg";
import supermanImages from "../assets/images/superhero/superman.jpg";

const Superhero = () => {
  return (
    <div>
      <Container>
        <br />
        <br />
        <br />
        <h2 className="text-white text-center" id="superhero">
          SUPERHERO MOVIES
        </h2>
        <hr className="border" />
        <br />
        <Row>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={antmanImages} alt="Antman Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Ant-Man</Card.Title>
                  <Card.Text className=" text-left">Scott adalah seorang pencuri ahli, kini berubah menjadi sosok superhero yang bisa mengecilkan diri dalam skala ekstrim</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={avengerImages} alt="Avanger Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Avanger End Game</Card.Title>
                  <Card.Text className=" text-left">Melanjutkan Avengers Infinity War, dimana kejadian Thanos berhasil mendapatkan semua infinity stones</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={batmanImages} alt="Batman Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">The Dark Knight</Card.Title>
                  <Card.Text className=" text-left">Batman memiliki musuh baru, Joker, otak kriminal yang berambisi menghancurkan Gotham City. Bersama Gordon dan Harvey Dent</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={robinhoodImages} alt="Robinhood Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Robin Hood</Card.Title>
                  <Card.Text className=" text-left">sebagai tentara salib kembali ke negerinya dalam keadaan yang berbeda. Ia menemukan pejabat korup dan menghabiskan uang kerajaan </Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={spidermanImages} alt="Spiderman Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Spiderman No Way Home</Card.Title>
                  <Card.Text className=" text-left">Identitas Spider-Man sekarang sudah terungkap, dan Peter meminta bantuan Doctor Strange. namun hal lain terjadi</Card.Text>
                  <Card.Text className=" text-left">
                    <Button variant="danger">See More !</Button>
                  </Card.Text>
                </div>
              </div>
            </Card>
          </Col>
          <Col md={4} className="movieWrapper">
            <Card className="movieImage">
              <Image src={supermanImages} alt="Superman Muvies" className="images" />
              <div className="bg-dark ">
                <div className="cardtitle m-1 p-2 text-white">
                  <Card.Title className=" text-center">Superman Man of Steel</Card.Title>
                  <Card.Text className=" text-left">Dipaksa untuk menghadapi rahasia tentang asal-usul galaxi nya, Superman kini belajar untuk membela planet bumi</Card.Text>
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

export default Superhero;
