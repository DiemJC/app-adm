<script>
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';

    export let data;
    
    export let form;

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
        goto('/panel/categories')
    }

</script>

<svelte:head>
    <title>Actualizar Categoría</title>
</svelte:head>

{#if data?.doc}
<div class="view text-center">
    <div class="box">
        <h2 class="text-3xl text-primary">Actualizar categoría</h2>
        <div class="divider"></div>
        <form method="POST" use:enhance>
            <input type="text" class="hidden" name="id" value="{data.doc._id}">
            <div class="form-group">
                <label for="" class="label text-sm">Nombre</label>
                <input value={data.doc.name} name="name" type="text" class:input-error={form?.name && form.missing} 
                class="input input-bordered form-control w-full" 
                    placeholder="Nombre de categoría"
                >
            </div>
            <div class="form-group">
                <label for="" class="label text-sm">Descripción</label>
                <textarea value={data.doc.slug} name="slug" class:textarea-error={form?.slug && form.missing} 
                class="textarea textarea-bordered w-full" placeholder="Breve descripción" />
            </div>
            <br>
            <div class="flex flex-end">
                <button class="btn btn-primary text-white">Actualizar</button>
            </div>
        </form>
    </div>
</div>
{:else}
<p>No data</p>
{/if}


<style>
    .box {
        width:min(30rem,100%);
        margin:auto;
        margin-top:3em;
    }
</style>