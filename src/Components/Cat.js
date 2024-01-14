import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function CatCard({ data }) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={data.imageSrc} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text>
          {data.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CatCard;