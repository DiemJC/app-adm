<script>
    import { goto } from '$app/navigation';
    import { env } from '$env/dynamic/public';

    import { showToastBR } from '$lib/tools/toasts';
    export let data;

    const updateSub = async (id) => {
        const label = document.getElementById(id).value;
        try {
            const req = await fetch(`${env.PUBLIC_API_URL}/api/sub/update/${id}`,
            {
                method:'PUT',
                headers:{
                    'Content-type':'application/json'
                },
                body:JSON.stringify({label})
            })
            const { success , message } = await req.json();
            showToastBR({title:'Actualizado',message,type:'success'});
            goto('/panel/categories/subcategory')
        } catch (error) {
            showToastBR({title:'Error',message:error,type:'error'});
        }
    } 

    const deleteSub = async (id) => {
        const proceed = await confirm('¿Seguro desea eliminar?')
        if(!proceed) return;
        try {
            const req = await fetch(`${env.PUBLIC_API_URL}/api/sub/delete/${id}`,
            {
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            })
            const { message } = await req.json();
            showToastBR({title:'Eliminado',message,type:'success'});
            goto('/panel/categories/subcategory')
        } catch (error) {
            showToastBR({title:'Error',message:error,type:'error'});
        }
    } 
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
        <input id={doc._id} type="text" class="input input-bordered" value="{doc.label}">
        <div class="flex gap-2">
            <button class="btn btn-ghost text-success" on:click={() => updateSub(doc._id)}>Actualizar</button>
            <button class="btn btn-ghost text-error" on:click={() => deleteSub(doc._id)}>Eliminar</button>
        </div>
    </div>
    {/each}
{/if}