<script>
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';
    
    export let form;
    export let data;

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Actualizado exitosamente',type:'success'});
        goto('/panel/brand/actions')
    }

    
</script>

{#if data?.doc}
<div class="view text-center">
    <div class="box">
        <h2 class="text-3xl text-primary">Actualizar marca</h2>
        <div class="divider"></div>
        <form method="PUT" use:enhance>
            <input name="id" value="{data.doc._id}" type="text" class="hidden">
            <div class="form-group">
                <label for="" class="label text-sm">Nombre</label>
                <input name="name" type="text" value="{data.doc.name}" class:input-error={form?.name && form.missing} class="input input-bordered form-control w-full" placeholder="ejemplo@mail.com" >
            </div>
            <div class="form-group">
                <label for="" class="label text-sm">Descripción</label>
                <textarea name="slug" value="{data.doc.slug}" class:textarea-error={form?.slug && form.missing} class="textarea textarea-bordered w-full" placeholder="Breve descripción del producto" />
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