<script>
    import { FieldSelect , Field , FormBox , FieldFile , FieldTextArea } from '$lib/components'
    import { goto } from '$app/navigation';
    import { showToastBR } from '$lib/tools/toasts';

    export let data;

    $: brands = [];
    $: categories = [];
    $: subs = [];
    $: fSubs = [];
    $: if(data?.brands) brands = data.brands.map(obj => ({key:obj._id,text:obj.name}));
    $: if(data?.categories) categories = data.categories.map(obj => ({key:obj._id,text:obj.name}));
    $: if(data?.subs) subs = data.subs;
    $: image = ''

    const handleSub = e => {
        fSubs = subs.filter(obj => obj.category._id === e.target.value)
        .map(obj => ({key:obj._id,text:obj.label}))
    }

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

<div class="products">
    <FormBox title="Registro de producto" btn="registrar" {cb} {loading} >
        <FieldFile name="cover" label="Imagen de portada" bind:value={image} />
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
    </FormBox>
</div>

<style>
    .products {
        display:grid;
        place-items: center;
        width:100%;
        min-height: 30rem;
        padding:1em;
    }
</style>