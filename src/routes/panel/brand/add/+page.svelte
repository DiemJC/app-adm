<script>
    import { FormBox, Field } from '$lib/components';
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';
    
    export let form;

    $: NameError = '';

    $: if(form?.success){ 
        showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
        goto('/panel/brand')
    }

    $: if(form?.name && form.missing) NameError = 'Debe ingresar un nombre';
    
</script>
<svelte:head>
    <title>Nueva Marca</title>
</svelte:head>

<div class="view text-center box">
    <FormBox btn="Registrar" title="Registrar nueva marca">
        <Field 
            name="name" type="text" ph="Marca" label="Nombre" 
            warning={form?.name && form.missing || form?.short} fb={NameError} 
        />
        <Field 
            name="slug" type="textarea" ph="Descripción breve" label="Descripción" 
        />
    </FormBox>
</div>

<style>
    .box {
        width:min(30rem,100%);
        margin:auto;
        margin-top:3em;
    }
</style>