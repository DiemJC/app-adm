<script>
    import { FieldSelect , Field , FormBox , FieldFile , FieldTextArea } from '$lib/components'
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';

    export let data;

    // $: brands = [];
    // $: categories = [];
    // $: subs = [];
    // $: fSubs = [];
    // $: if(data?.brands) brands = data.brands.map(obj => ({key:obj._id,text:obj.name}));
    // $: if(data?.categories) categories = data.categories.map(obj => ({key:obj._id,text:obj.name}));
    // $: if(data?.subs) subs = data.subs;
    $: image = data.doc.cover;


    // const handleSub = e => {
    //     fSubs = subs.filter(obj => obj.category._id === e.target.value)
    //     .map(obj => ({key:obj._id,text:obj.label}))
    // }

    $: loading = false;

    const loadingToast = () => {
        setTimeout(() => {
            showToastBR({
                title:'Enviando',
                message:'Por favor espere esta operación puede demorar algunos minutos',
                type:'info'
            });
        },4000)
    }
    const cb = () => {
        loading = true;
        loadingToast()
        return async ({result}) => {    
            if(result.type === 'success') {
                const { message } = result.data;
                showToastBR({title:'Registrado',message,type:'success'})
                loading = false;
                goto('/panel/products');
            }
        }
    }
    
</script>
{#if data?.doc}

<div class="products">
    <FormBox title="Registro de producto" btn="registrar" {cb} {loading} >
        <Field label="Código de barras" type="text" value="{data.doc.code}"
            focusable={true} warning={false} name="code"
        />
        <!-- Agregar opción para cambiar imagen si dan click eliminar actual y devolver file input -->
        <FieldFile name="cover" label="Imagen de portada" bind:value={image} />
        <!-- <div class="flex gap-2 w-full ">
            <FieldSelect options={brands} label="Marca" warnings={false} name="brand" value="{data.doc.brand}" />
            <FieldSelect options={categories} label="Categorías" warnings={false} 
                onChange={handleSub}
            />
            <FieldSelect options={fSubs} label="Subcategoría" warnings={false} name="sub" value="{data.doc.sub}" />
        </div> -->
        <Field 
            name="name" type="text" ph="Nombre del producto" label="Nombre" value="{data.doc.name}"
        />
        <FieldTextArea name="slug" label="Descripción" ph="Breve descripción del producto" value={data.doc.slug} />
        <Field 
            name="price" type="number" ph="Costo inicial" label="Costo" value={data.doc.price}
        />
    </FormBox>
</div>

{/if}
<style>
    .products {
        display:grid;
        place-items: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }
</style>