import React from 'react';
import SongTable from './components/SongTable';
import AddSongForm from './components/AddSongForm';
import { ToastContainer } from 'react-toastify';
import { Song } from './app/songsSlice';

const App: React.FC = () => {
  const [song, setSong] = React.useState<Song>({
    _id: '',
    title: '',
    artist: '',
    album: '',
    genre: '',
  });

  return (
    <div>
    <ToastContainer />
      <AddSongForm song={song} setSong={setSong} />
      <SongTable setSong={setSong} />
    </div>
  );
};

export default App;
