const API_KEY = 'f7dd73b34df54a918588a3acdc64e91a'
const OMDB_API = 'https://newsapi.org/v2/everything';

export const getListadoNoticias = async (criterioBusqueda, paginaActual) => {
    const respuesta = await fetch(`${OMDB_API}?apiKey=${API_KEY}&q=${criterioBusqueda}&language=es&pageSize=10&page=${paginaActual}&sortBy=publishedAt`);
    const noticias = await respuesta.json();
    return noticias;
}
