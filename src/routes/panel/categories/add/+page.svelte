<script>
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';

    export let data;
    
    export let form;

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
        goto('/panel/brand')
    }

</script>

<div class="view text-center">
    <div class="box">
        <h2 class="text-3xl text-primary">Registrar categoría</h2>
        <div class="divider"></div>
        <form method="POST" use:enhance>
            <div class="form-group">
                <label for="" class="label text-sm">Marca</label>
                <input name="name" type="text" 
                    class:input-error={form?.name && form.missing} list="brand"
                    class="input input-bordered form-control w-full" 
                    placeholder="Marca" 
                >
                {#if data?.brands && data.brands.length > 0}
                <datalist>
                    {#each data.brands as brand}
                    <option value="{brand._id}">{brand.name}</option>
                    {/each}
                </datalist>
                
                {/if}
            </div>
            <div class="form-group">
                <label for="" class="label text-sm">Descripción</label>
                <textarea name="slug" class:textarea-error={form?.slug && form.missing} class="textarea textarea-bordered w-full" placeholder="Breve descripción del producto" />
            </div>
            <br>
            <div class="flex flex-end">
                <button class="btn btn-primary text-white">Registrar</button>
            </div>
        </form>
    </div>
</div>

<style>
    .box {
        width:min(30rem,100%);
        margin:auto;
        margin-top:3em;
    }
</style>