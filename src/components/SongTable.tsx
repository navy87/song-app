import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Song, deleteSongAsync, fetchSongsAsync } from '../app/songsSlice';
import { RootState } from '../app/rootReducer'
import { AppDispatch } from '../app/store';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface SongTableProps {
  setSong: React.Dispatch<React.SetStateAction<Song>>;
}

const SongTable: React.FC<SongTableProps> = ({setSong}) => {
    const dispatch: AppDispatch = useDispatch(); 
    const songs = useSelector((state: RootState) => state.songs.songs);
  
    useEffect(() => {
        console.log('Dispatching fetchSongsAsync...');
      dispatch(fetchSongsAsync());
      
    }, [dispatch]);

    const handleUpdateSong = async (id: string, updatedSong: any) => {
      setSong(updatedSong);
      window.scrollTo(0, 0);
    };
  
    const handleDeleteSong = async (id: string) => {
      await dispatch(deleteSongAsync(id));
      await dispatch(fetchSongsAsync());
      toast.success('Song Deleted successfully!');
    };
  

    return (
      <StyledContainer>
        <h2>Song Table</h2>
        <StyledTable>
          <thead>
            <tr>
              <th>Title</th>
              <th>Artist</th>
              <th>Album</th>
              <th>Genre</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(songs) ? (
              songs.map((song) => (
                <tr key={song.title}>
                  <td>{song.title}</td>
                  <td>{song.artist}</td>
                  <td>{song.album}</td>
                  <td>{song.genre}</td>
                  <td>
                  <button onClick={() => handleUpdateSong(song._id, song)}>
                    Edit
                  </button>
                  <button onClick={() => handleDeleteSong(song._id)}>
                    Delete
                  </button>
                </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>Loading...</td>
              </tr>
            )}
          </tbody>
          </StyledTable>
          </StyledContainer>
    );
  };

  // Emotion styled components
const StyledContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  font-family: sans-serif;

  th,
  td {
    padding: 10px;
    text-align: left;
    border-bottom: 1px solid #ddd;
  }

  th {
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f5f5f5;
  }
  button {
    margin-right: 5px;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

export default SongTable;
