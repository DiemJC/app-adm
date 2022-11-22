<script>
    // INPUTS 
    // TEXT - Name
    // TEXTAREA - Slug
    export let form
</script>

<div class="view text-center">
    <div class="box">
        <h2 class="text-3xl text-primary">Registrar nueva marca</h2>
        <div class="divider"></div>
        <form method="POST">
            <div class="form-group">
                <label for="" class="label text-sm">Nombre</label>
                <input name="name" type="text" class:input-error={form?.name && form.missing} class="input input-bordered form-control w-full" placeholder="ejemplo@mail.com" >
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