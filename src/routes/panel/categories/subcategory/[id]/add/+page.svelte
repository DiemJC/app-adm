<script>
    import { enhance } from '$app/forms';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';
    
    export let data;
    export let form;

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
        goto('/panel/categories/subcategory')
    }
</script>

<a href="/panel/categories/subcategory" class="link link-hover link-primary ml-2" >Regresar</a>
<div class="box">
    <h2 class="text-primary text-3xl">Añadir sub categoría a {data.category.name}</h2>
    <div class="divider"></div>
    <div class="form">
        <form method="POST" use:enhance>
            <input type="text" name="category" value={data.category._id} class="hidden">
            <div class="form-group">
                <label for="" class="label text-sm">Sub categoría</label>
                <input name="label" class="input input-bordered w-full" placeholder="Sub categoría" />
            </div>
            <br>
            <div>
                <button class="btn btn-primary text-white ">Agregar</button>
            </div>
        </form>
    </div>
</div>

<style>
    .box {
        margin-top:2em;
        margin:auto;
        text-align:center;
        padding:2em;
    }

    .form {
        display:flex;
        flex-direction: column;
    }
</style>