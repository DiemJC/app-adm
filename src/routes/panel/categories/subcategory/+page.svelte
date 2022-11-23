<script>
    import { Alert , TagIcon  } from '$lib/components';
    export let data;

    $: subs = data.docs;

    $: filtered = (id) => subs.filter(obj => obj.category._id === id);

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
        {#each data?.categories as doc}
            <Alert>
                <TagIcon/>
                <div>
                    <h3 class="font-bold">{doc.name}</h3>
                    <div class="text-xs">sub-categorías: {filtered(doc._id).length}</div>
                </div>
                <div slot="actions">
                    <a href="/panel/categories/subcategory/{doc._id}/add" class="btn btn-sm btn-ghost text-primary">Agregar</a>
                    {#if filtered(doc._id).length > 0}
                    <a href="/panel/categories/subcategory/{doc._id}/update" class="btn btn-sm btn-ghost text-success">Editar</a>
                    {/if}
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