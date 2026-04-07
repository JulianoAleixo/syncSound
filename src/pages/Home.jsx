import { useState, useEffect } from 'react'
import TrackList from '../components/TrackList'
import GenreFilter from '../components/GenreFilter'
import { fetchTopTracks, fetchTracksByGenre, searchTracks } from '../services/api'

const Home = () => {
    const [tracks, setTracks] = useState([]);
    const [search, setSearch] = useState("");
    const [activeGenre, setActiveGenre] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (search.trim()) return;
        loadByGenre(activeGenre);
    }, [activeGenre]);

    const loadByGenre = async (genreId) => {
        try {
            setLoading(true);
            setError(null);
            const data =
                genreId === 0
                    ? await fetchTopTracks()
                    : await fetchTracksByGenre(genreId);
            setTracks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!search.trim()) {
            loadByGenre(activeGenre);
            return;
        }
        try {
            setLoading(true);
            setError(null);
            const data = await searchTracks(search);
            setTracks(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGenreChange = (genreId) => {
        setActiveGenre(genreId);
        setSearch("");
    };

    return (
        <main className="max-w-6xl mx-auto px-4 pt-24 pb-12">
            <form onSubmit={handleSearch} className="flex gap-2 mb-6">
                <input
                    type="text"
                    placeholder="Buscar músicas ou artistas..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="flex-1 bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outrline-none focus:ring-2 focus:ring-green-400"
                />
                <button
                    type="submit"
                    className="bg-green-400 hover:bg-green-300 text-zinc-900 font-semibold text-sm px-5 py-2.5 rounded-lg transition-colors"
                >
                    Buscar
                </button>
            </form>

            <div className="mb-8">
                <GenreFilter
                    activeGenre={activeGenre}
                    onGenreChange={handleGenreChange}
                />
            </div>

            {loading && (
                <p className="text-center text-zinc-500 py-20">Carregando...</p>
            )}

            {error && (
                <p className="text-center text-red-400 py-20">Erro: {error}</p>
            )}

            {!loading && !error && <TrackList tracks={tracks} />}
        </main>
    );
};
export default Home;
