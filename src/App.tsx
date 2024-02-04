import React, { useEffect } from "react";
import { Song, fetchSongsAsync } from "./app/songsSlice";
import { Link, Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./app/store";
import { toast } from "react-toastify";
import Loading from "./components/Loading";

const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch(); 
    const [song, setSong] = React.useState<Song>({
        _id: "",
        title: "",
        artist: "",
        album: "",
        genre: "",
    });
    const [loading, setLoading] = React.useState<boolean>(false);

    useEffect(() => {
        console.log("Dispatching fetchSongsAsync...");
        setLoading(true);
        dispatch(fetchSongsAsync()).then(() => {
            setLoading(false);
        }).catch((error) => {
            toast.error(`Error: ${error}`);
            setLoading(false);
        } );
    }, [dispatch]);

    return (
        <div>
            <header>
                <h1>Music Library</h1>

                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/add">Add Song</Link>
                        </li>
                        <li>
                            <Link to="/stats">Stats</Link>
                        </li>
                    </ul>
                </nav>
            </header>

            <Loading loading={loading}>
              <Outlet />
            </Loading>
        </div>
    );
};

export default App;
