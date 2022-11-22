<script>
    import { Alert , TagIcon  } from '$lib/components';
    export let data;
</script>

{#if data?.size === 0}
    <div class="box text-center">
        <h2 class="text-4xl mt-3 text-primary">Sin marcas registradas</h2>
        <div class="divider"></div>
        <a href="/panel/brand/add" class="mt-3 link link-hover">Agregar</a>
    </div>
    {:else}
    <div class="tags">
        <h2 class="text-3xl text-primary font-bold">Productos</h2>
        <div class="divider"></div>
        {#each data?.docs as doc}
            <Alert>
                <TagIcon/>
                <h3 class="font-bold">{doc.name}</h3>
                <div class="text-xs">{doc.slug}</div>
                <div class="flex-none" slot="actions">
                    <a href="/panel/brand/actions/{doc._id}" class="btn btn-sm btn-ghost text-success">Editar</a>
                    <button class="btn btn-sm btn-ghost text-error">Eliminar</button>
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