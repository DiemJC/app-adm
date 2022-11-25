<script>
    export let data;
</script>

<div class="tabs-box">
    <div class="tabs ">
        <a href="/panel/brand" class="tab tab-bordered" class:tab-active={data?.path === 'index'}>General</a> 
        <a href="/panel/brand/add" class="tab tab-bordered" class:tab-active={data?.path === 'add'}>Nuevo</a> 
        <a href="/panel/brand/actions" data-sveltekit-reload class="tab tab-bordered" class:tab-active={data?.path === 'actions'}>Acciones</a>
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