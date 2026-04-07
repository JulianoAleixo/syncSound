const BASE_URL = import.meta.env.DEV ? "/deezer" : "https://api.deezer.com";

export const GENRES = [
    { id: 0, name: "Todos" },
    { id: 132, name: "Pop" },
    { id: 116, name: "Rap / Hip Hop" },
    { id: 152, name: "Rock" },
    { id: 113, name: "Dance" },
    { id: 165, name: "R&B / Soul" },
    { id: 106, name: "Eletrônica" },
    { id: 85, name: "Alternativo" },
];

export const fetchTopTracks = async () => {
    const response = await fetch(`${BASE_URL}/chart/0/tracks?limit=40`);
    if (!response.ok) throw new Error("Erro ao buscar músicas em alta");
    const data = await response.json();
    return data.data;
};

export const searchTracks = async (query) => {
    const response = await fetch(
        `${BASE_URL}/search?q=${encodeURIComponent(query)}&limit=40`,
    );
    if (!response.ok) throw new Error("Erro ao buscar músicas");
    const data = await response.json();
    return data.data;
};

export const fetchTracksByGenre = async (genreId) => {
    const response = await fetch(
        `${BASE_URL}/chart/${genreId}/tracks?limit=40`,
    );
    if (!response.ok) throw new Error("Erro ao buscar por gênero");

    const data = await response.json();
    return data.data;
};

export const fetchTrackById = async (id) => {
    const response = await fetch(`${BASE_URL}/track/${id}`);
    if (!response.ok) throw new Error("Erro ao buscar detalhes da faixa");
    return response.json();
};

export const fetchArtistTopTracks = async (artistId) => {
    const response = await fetch(`${BASE_URL}/artist/${artistId}/top?limit=10`);
    if (!response.ok) throw new Error("Erro ao buscar músicas do artista");
    const data = await response.json();
    return data.data;
};
