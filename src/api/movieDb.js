import axiosClient from './axiosClient';

export const Category = {
    tv: 'tv', movie: 'movie'
}
export const movieType = {
    upcoming: 'upcoming', popular: 'popular', top_rated: 'top_rated', trending:'trending', latest:'latest'
};

export const tvType = {
    popular: 'popular', top_rated: 'top_rated', on_the_air: 'on_the_air'
}
export const movieDb = {

    getMovies: (type, params) => {
        const url = 'movie/' + movieType[type] + '?' + 'page=' + params;
        return axiosClient.get(url, params);
    },
    getTv: (type, params) => {
        const url = 'tv/' + tvType[type] + '?' + 'page=' + params;
        return axiosClient.get(url, params);
    },
    getVideos: (cate, id) => {
        const url = Category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + Category[cate] + '?' + 'query=' + params;

        return axiosClient.get(url, {});
    },
    detail: (cate, id, params) => {
        const url = Category[cate] + '/' + id ;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = Category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = Category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
};
