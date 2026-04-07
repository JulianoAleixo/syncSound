import { GENRES } from "../services/api";

const GenreFilter = ({ activeGenre, onGenreChange }) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {GENRES.map((genre) => (
                <button
                    key={genre.id}
                    onClick={() => onGenreChange(genre.id)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                        activeGenre === genre.id
                            ? "bg-green-400 text-zinc-900"
                            : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700"
                    }`}
                >
                    {genre.name}
                </button>
            ))}
        </div>
    );
};
export default GenreFilter;
