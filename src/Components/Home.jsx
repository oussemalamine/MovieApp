import React, { useState } from 'react';
import { Container, Row, Col, Card, Form } from 'react-bootstrap'; // Assuming it's imported elsewhere
import movies from './movies';
import { Link } from 'react-router-dom';

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const filteredMovies = selectedCategory === 'All' ? movies : movies.filter(movie => movie.category.includes(selectedCategory));

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Movie Categories</h1>
      <Form.Group>
        <Form.Label>Filter by Category:</Form.Label>
        <Form.Control as="select" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="All">All</option>
          {movies.flatMap(movie => movie.category).filter((value, index, self) => self.indexOf(value) === index).map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </Form.Control>
      </Form.Group>
      <Row className="justify-content-center">
        {filteredMovies.map((movie) => (
          <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Link to={`/movie/${movie.id}`}>
                <Card.Img variant="top" src={movie.poster} alt={movie.title} style={{height: '50vh', width:'20vw'}} />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
      {filteredMovies.length === 0 && <p className="text-center">No movies found.</p>}
    </Container>
  );
};

export default Home;
