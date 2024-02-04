import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSong, addSongAsync, fetchSongsAsync } from '../app/songsSlice';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AppDispatch } from '../app/store';


const AddSongForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [newSong, setNewSong] = useState({
    _id: '',
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewSong({ ...newSong, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch(addSongAsync(newSong));
    dispatch(fetchSongsAsync());

    setNewSong({
      _id: '',
      title: '',
      artist: '',
      album: '',
      genre: '',
    });
    toast.success('Song added successfully!');
  };

  return (
    <StyledContainer>
      <h2>Add New Song</h2>
      <StyledForm onSubmit={handleSubmit}>
        <label>Title:</label>
        <StyledInput  type="text" name="title" value={newSong.title} onChange={handleChange} required />

        <label>Artist:</label>
        <StyledInput  type="text" name="artist" value={newSong.artist} onChange={handleChange} required />

        <label>Album:</label>
        <StyledInput  type="text" name="album" value={newSong.album} onChange={handleChange} required />

        <label>Genre:</label>
        <StyledInput  type="text" name="genre" value={newSong.genre} onChange={handleChange} required />

        <StyledButton  type="submit">Add Song</StyledButton>
        </StyledForm>
        </StyledContainer>
  );
};

// Emotion styled components
const StyledContainer = styled.div`
  width: 400px;
  margin: 40px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 10px;
`;

const StyledButton = styled.button`
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export default AddSongForm;
