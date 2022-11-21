<script>
    import { enhance } from '$app/forms';
    export let form;
</script>

<div class="form-box">
    <div class="form" style="width: min(40rem,100%);">
        <h2 class="text-3xl">Inicio de sesión</h2>
        <form method="POST" use:enhance>
            <div class="form-group">
                <label for="" class="label text-sm">Correo electrónico</label>
                <input name="email" type="email" class:input-error={form?.email && form.missing} class="input input-bordered form-control w-full" placeholder="ejemplo@mail.com" >
            </div>
            <div class="form-group">
                <label for="" class="label text-sm">Contraseña</label>
                <input name="password" type="password" class:input-error={form?.password && form.missing || form?.short} class="input input-bordered form-control w-full" placeholder="Ingrese su contraseña" >
            </div>
            <br>
            <button class="btn btn-primary text-white">Iniciar sesión</button>
        </form>
    </div>
</div>

<style>

    .form-box {
        display:grid;
        place-items: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }
    
</style>