import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CatCard from './Components/Cat';

const data = [{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
{
  imageSrc: 'https://cats.com/wp-content/uploads/2022/04/Classic-orange-tabby.jpg',
  name: 'Biff',
  age: 17,
  description: 'Super cool cat'
},
]

function App() {

  return (
    <div>
      <h1>My App</h1>

      {/* <CatCard data={data} /> */}
      <Container>
        <Row>
        {data.map((cat, i) => {
          return (
            <Col xs='12' sm='6' md='4' lg='3'>
              <CatCard data={cat} />
            </Col>
          )
        })}
        </Row>
      </Container>
    </div>
  );
}

export default App;