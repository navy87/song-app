import React from 'react';
import { BrowserRouter, Route,  Routes } from 'react-router-dom';
import SongTable from './components/SongTable';
import App from './App';
import AddSongPage from './components/AddSongPage';
import EditSongPage from './components/EditSongPage';
import StatsPage from './components/StatsPage';


const PageRoute: React.FC = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route index element={<SongTable />} />
                <Route path="songs" element={<SongTable />} />
                <Route path="add" element={<AddSongPage />} />
                <Route path="edit/:id" element={<EditSongPage />} />
                <Route path="stats" element={<StatsPage />} />
            </Route>

            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    </BrowserRouter>
  );
};

export default PageRoute;