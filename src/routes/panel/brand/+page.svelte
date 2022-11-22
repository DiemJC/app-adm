<script>
    export let data;
    $: console.log(data);
</script>

<svelte:head>
    <title>Marcas</title>
</svelte:head>

{#if true}
<div class="box text-center">
    <h2 class="text-4xl mt-3">Sin marcas registradas</h2>
    <div class="divider"></div>
    <a href="/panel/brand/add" class="mt-3 link link-hover">Agregar</a>
</div>
{/if}

<style>
    .box {
        padding:2em;
    }
</style>