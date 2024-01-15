<script>
    import { FilmStore } from '../../films-stores.js';


    let handleClick = ()=> FilmStore.update(prev =>   {
        let newFilm = {
            id: 3,
            title: `drive`,
            description: "Nick"
        }
        return[...prev, newFilm]

    })
</script>

<ul> 
    {#each $FilmStore as film}
    <li>
        <a href="films/{film.id}">{film.title}</a>
    </li>
    {/each}
</ul>


<button type ="button" on:click = {handleClick}>
    Add a Film
</button>