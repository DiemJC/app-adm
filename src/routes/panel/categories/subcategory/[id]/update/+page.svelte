<script>
    export let data;
</script>

<a href="/panel/category/subcategory" class="link link-hover text-primary ml-2">Regresar</a>
{#if data?.docs}
    <div class="text-center">
        <h2 class="text-primary text-3xl">Categorías en {data.docs[0].category.name}</h2>
    </div>
    <div class="divider"></div>
    {#each data.docs as doc}
    <div class="card shadow-xl p-6 m-auto" style="width:min(30rem,100%);margin-top:2rem;" >
        <span class="text text-primary">Subcategoría</span>
        <input type="text" class="input input-bordered" value="{doc.label}">
        <div class="flex gap-2">
            <button class="btn btn-ghost text-success">Actualizar</button>
            <button class="btn btn-ghost text-error">Eliminar</button>
        </div>
    </div>
    {/each}
{/if}