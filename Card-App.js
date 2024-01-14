import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import cat from './cat.jpg'

function App() {

   const displayCards = () => {
    const display = []
    for (let i = 0; i < 11; i++) {
      const catCard = (
        <Card key={i} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={cat} />
          <Card.Body>
            <Card.Title>Biff</Card.Title>
            <Card.Text>
              This is my cat
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )
      display.push(catCard)
    }

    return display
   }

  return (
    <div>
      {displayCards()}
    </div>
  );
}

export default App;