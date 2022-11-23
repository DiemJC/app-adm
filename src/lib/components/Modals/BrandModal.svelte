<script>
    import { onDestroy } from 'svelte';
    import { env } from '$env/dynamic/public';
    import { focus } from '$lib/store';
    import { showToastBR } from '$lib/tools/toasts';

    const apidir = env.PUBLIC_API_URL;

    export let route;
    console.log(route)
    let paths = {
        brands:'brand',
        categories:'category',
        products:'product'
    }

    $: path = route.split('/')[2]
    console.log(path)
    let node;

    const deleteBrand = async () => {
        const id = $focus;
        try {
            const response = await fetch(`${apidir}/api/${paths[path]}/delete/${id}`,{
                method:'DELETE',
                headers:{
                    'Content-type':'application/json'
                }
            });
            const data = await response.json();
            if(data.success) showToastBR({type:'success',title:'Eliminado',message:'Registro eliminado satisfactoriamente'});
            node.parentNode.removeChild(node);
        } catch (error) {
            showToastBR({type:'error',title:'Error',message:'Hubo algún error en la petición, intente más tarde'})
            node.parentNode.removeChild(node);
        }
    }

    onDestroy(() => focus.clear())
</script>


<input type="checkbox" id="brand-modal" class="modal-toggle" />
<label for="brand-modal" class="modal cursor-pointer" bind:this={node} >
    <label class="modal-box relative" for="">
        <h3 class="font-bold text-lg text-primary">Acción irreversible</h3>
        <p class="py-4">¿Desea continuar con la eliminación del item?</p>
        <p class="py-4">Click afuera para descartar</p>
        <div class="modal-action flex gap-2">
            <label for="my-modal-6" class="btn btn-error text-white" on:click={deleteBrand} on:keypress={deleteBrand}>Confirmar</label>
        </div>
    </label>
</label>