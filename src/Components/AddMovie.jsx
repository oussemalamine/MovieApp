import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap'; // Assuming it's imported elsewhere

const AddMovie = ({ onAddMovie }) => {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState('');
  const [poster, setPoster] = useState('');
  const [trailer, setTrailer] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title: title,
      rating: parseFloat(rating),
      poster: poster,
      trailer: trailer,
      category: category.split(',').map((cat) => cat.trim()),
    };
    onAddMovie(newMovie);
    setTitle('');
    setRating('');
    setPoster('');
    setTrailer('');
    setCategory('');
  };

  return (
    <Container className="mt-4">
      <h1 className="text-center mb-4">Add Movie</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Rating</Form.Label>
          <Form.Control type="number" value={rating} onChange={(e) => setRating(e.target.value)} step="0.1" min="0" max="10" required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Poster URL</Form.Label>
          <Form.Control type="text" value={poster} onChange={(e) => setPoster(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Trailer URL</Form.Label>
          <Form.Control type="text" value={trailer} onChange={(e) => setTrailer(e.target.value)} required />
        </Form.Group>
        <Form.Group>
          <Form.Label>Category (comma-separated)</Form.Label>
          <Form.Control type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </Form.Group>
        <Button type="submit">Add Movie</Button>
      </Form>
    </Container>
  );
};

export default AddMovie;
