<script>
    import { Alert , TagIcon  } from '$lib/components';
    export let data;
</script>

{#if data?.size === 0}
    <div class="box text-center">
        <h2 class="text-4xl mt-3 text-primary">Sin categorías registradas</h2>
        <div class="divider"></div>
        <a href="/panel/categories/add" class="mt-3 link link-hover">Agregar</a>
    </div>
    {:else}
    <div class="tags">
        <h2 class="text-3xl text-primary font-bold">Categorias</h2>
        <div class="divider"></div>
        {#each data?.docs as doc}
            <Alert>
                <TagIcon/>
                <div>
                    <h3 class="font-bold">{doc.brand.name}</h3>
                    <div class="text-xs"><b>{doc.name}</b> - {doc.slug}</div>
                </div>
            </Alert>
            <br>
        {/each}
    </div>
{/if}


<style>
    .box {
        padding:2em;
    }
    .tags {
        padding:2em;
    }
</style>