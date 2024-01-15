<script>
    import {FilmStore} from '../../../films-stores'

    export let data;

    let film = $FilmStore.find(film => film.id === data.id);
    
    console.log(film);

</script>

{#if film}
    <h1>{film.title}</h1>
    <p>{film.description}</p>
{/if}

