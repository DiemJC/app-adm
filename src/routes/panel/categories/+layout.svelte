<script>
    export let data;
</script>

<div class="tabs-box">
    <div class="tabs ">
        
        <a href="/panel/categories" class="tab tab-bordered" class:tab-active={data?.path === 'index'}>General</a> 
        <a href="/panel/categories/add" class="tab tab-bordered" class:tab-active={data?.path === 'add'}>Nuevo</a> 
        <a href="/panel/categories/actions" class="tab tab-bordered" class:tab-active={data?.path === 'actions'}>Acciones</a>
        <a href="/panel/categories/subcategory" class="tab tab-bordered" class:tab-active={data?.path === 'subcategory'}>Sub categorías</a>
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