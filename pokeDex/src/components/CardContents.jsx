import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function CardContent(props) {
  const { pokemon } = props;
  return (
    <>
        <Card.Title>{pokemon.name}</Card.Title>
        <Card.Text>
        <Container>
          <Row>
            <Col> {pokemon.moves[0]?.move.name}</Col>
            <Col> {pokemon.moves[1]?.move.name}</Col>
          </Row>
          <Row>
            <Col> {pokemon.moves[2]?.move.name}</Col>
            <Col> {pokemon.moves[3]?.move.name}</Col>
          </Row>
        </Container>
      </Card.Text>
    </>
  );
}



  