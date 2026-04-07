import { useState, useEffect, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchTrackById, fetchArtistTopTracks } from "../services/api";
import TrackCard from "../components/TrackCard";
import { ArrowLeft, Pause, Play } from "lucide-react";

const TrackDetail = () => {
    const { id } = useParams();
    const [track, setTrack] = useState(null);
    const [related, setRelated] = useState([]);
    const [playing, setPlaying] = useState(false);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const audioRef = useRef();

    useEffect(() => {
        const loadTrack = async () => {
            try {
                setLoading(true);
                setError(null);
                setPlaying(false);

                const data = await fetchTrackById(id);
                setTrack(data);

                const artistTracks = await fetchArtistTopTracks(data.artist.id);
                setRelated(
                    artistTracks.filter((t) => t.id !== data.id).slice(0, 5),
                );
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        loadTrack();
    }, [id]);

    const togglePlay = () => {
        if (!audioRef.current) return;
        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setPlaying(!playing);
    };

    if (loading)
        return <p className="text-center text-zinc-500 pt-32">Carregando...</p>;
    if (error)
        return <p className="text-center text-red-400 pt-32">Erro: {error}</p>;

    const cover =
        track.album?.cover_big ||
        "https://placehold.co/500x500/27272a/71717a?text=Sem+Capa";
    const duration = track.duration
        ? `${Math.floor(track.duration / 60)}:${String(track.duration % 60).padStart(2, "0")}`
        : null;

    return (
        <main className="max-w-4xl mx-auto px-4 pt-24 pb-12">
            <Link
                to="/"
                className="inline-flex items-center gap-1 text-sm text-zinc-400 hover:text-white mb-8 transition-colors"
            >
                <ArrowLeft size={16} />
                Voltar
            </Link>

            <div className="flex flex-col sm:flex-row gap-8">
                <div className="shrink-0">
                    <img
                        src={cover}
                        alt={track.title}
                        className="w-48 rounded-xl"
                    />
                </div>

                <div className="flex-1">
                    <p className="text-xs text-zinc-500 uppercase tracking-widest mb-1">
                        {track.album?.title}
                    </p>
                    <h1 className="text-2xl font-bold text-white leading-tight">
                        {track.title}
                    </h1>
                    <Link
                        to={`/?artist=${track.artist.id}`}
                        className="text-green-400 hover:text-green-300 text-sm mt-1 inline-block transition-colors"
                    >
                        {track.artist?.name}
                    </Link>

                    {duration && (
                        <p className="text-zinc-500 text-sm mt-2">
                            Duração: {duration}
                        </p>
                    )}

                    {track.preview ? (
                        <div className="mt-6">
                            <p className="text-xs text-zinc-500 mb-2">
                                Preview (30 segundos)
                            </p>
                            <audio
                                ref={audioRef}
                                src={track.preview}
                                onEnded={() => setPlaying(false)}
                            />
                            <button
                                onClick={togglePlay}
                                className="flex items-center gap-3 bg-green-400 hover:bg-green-300 text-zinc-900 font-semibold px-6 py-2.5 rounded-full transition-colors"
                            >
                                <span>{playing ? <Pause /> : <Play />}</span>
                            </button>
                        </div>
                    ) : (
                        <p className="text-zinc-600 text-sm mt-6">
                            Preview não disponível.
                        </p>
                    )}
                </div>
            </div>

            {related.length > 0 && (
                <div className="mt-12">
                    <h2 className="text-lg font-semibold text-white mb-4">
                        Mais de {track.artist?.name}
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                        {related.map((t) => (
                            <TrackCard key={t.id} track={t} />
                        ))}
                    </div>
                </div>
            )}
        </main>
    );
};
export default TrackDetail;
