import React from 'react';
import SongTable from './components/SongTable';
import AddSongForm from './components/AddSongForm';
import { ToastContainer } from 'react-toastify';

const App: React.FC = () => {
  return (
    <div>
    <ToastContainer />
      <AddSongForm />
      <SongTable />
    </div>
  );
};

export default App;
