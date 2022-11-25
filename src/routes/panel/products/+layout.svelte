<script>
    export let data;
    $: console.log(data);
</script>

<div class="tabs-box">
    <div class="tabs ">
        
        <a href="/panel/products" class="tab tab-bordered" class:tab-active={data?.path === 'index'}>General</a> 
        <a href="/panel/products/add" class="tab tab-bordered" class:tab-active={data?.path === 'add'}>Nuevo</a> 
        <a href="/panel/products/actions" data-sveltekit-reload class:tab-active={data?.path === 'actions'} class="tab tab-bordered">Acciones</a>
    </div>
</div>

<slot/>

<style>
    .tabs-box {
        width:100%;
        display:flex;
        justify-content: center;
    }
</style>