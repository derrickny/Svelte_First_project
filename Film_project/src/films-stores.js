import { writable } from "svelte/store";

export const FilmStore = writable([
    {id:1 ,title:'The Godfather',year:1972,Director:'Francis Ford Coppola'},
    {id:2 ,title:'The Godfather: Part II',year:1974,Director:'Francis Ford Coppola'},
    {id:3 ,title:'The Dark Knight',year:2008,Director:'Christopher Nolan'},
]);


