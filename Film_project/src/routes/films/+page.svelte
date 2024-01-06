<script>
    let film = 'The Godfather'
</script>

<!-- <h1>{film.toUpperCase()}</h1>

<style>
    h1 {
        font-size: 40px;
        color: purple;
        position: center;
        text-align: center;
        margin-top: 100px;

    }
 </style>    -->

{#if film.startsWith('f')}
    <p>It starts with 'T'</p>
{:else}
    <p>It doesn't start with 'T'</p>
{/if}