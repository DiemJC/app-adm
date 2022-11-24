<script>
    import { FieldSelect , Field , FormBox , FieldFile , FieldTextArea } from '$lib/components'
    // import { goto } from '$app/navigation';
    // import { showToastBR } from '$lib/tools/toasts';

    export let data;
    //export let form;

    // $: if(form?.success){ 
    //     showToastBR({title:form.message,message:'Su registro fue realizado con éxito',type:'success'});
    //     goto('/panel/products')
    // }

    $: hasCode = false;
    $: brands = [];
    $: categories = [];
    $: subs = [];
    $: fSubs = [];
    $: if(data?.brands) brands = data.brands.map(obj => ({key:obj._id,text:obj.name}));
    $: if(data?.categories) categories = data.categories.map(obj => ({key:obj._id,text:obj.name}));
    $: if(data?.subs) subs = data.subs;
    $: image = ''
    const handleCode = e => {
        if(e.target.value) hasCode = true;
    }

    const handleSub = e => {
        fSubs = subs.filter(obj => obj.category._id === e.target.value)
        .map(obj => ({key:obj._id,text:obj.label}))
    }

</script>

<div class="products">
    <FormBox title="Registro de producto" btn="registrar" >
        <Field label="Código de barras" type="text" 
            focusable={true} warning={false} name="code" onChange={handleCode}
        />
        {#if hasCode}
        <FieldFile name="cover" label="Imagen de portada" bind:value={image} />
        {/if}
        {#if hasCode && image}
        <div class="flex gap-2 w-full ">
            <FieldSelect options={brands} label="Marca" warnings={false} name="brand" />
            <FieldSelect options={categories} label="Categorías" warnings={false} 
                onChange={handleSub}
            />
            {#if fSubs.length > 0}
            <FieldSelect options={fSubs} label="Subcategoría" warnings={false} name="sub" />
            {/if}
        </div>
        <Field 
            name="name" type="text" ph="Nombre del producto" label="Nombre"
        />
        <FieldTextArea name="slug" label="Descripción" ph="Breve descripción del producto" />
        <Field 
            name="price" type="number" ph="Costo inicial" label="Costo"
        />
        {:else}
        <p>Escanee o ingrese el código de barras seguido de enter para continuar</p>
        {/if}
    </FormBox>
</div>

<style>
    .products {
        display:grid;
        place-content: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }
</style>