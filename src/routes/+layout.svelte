<script>
    import '../app.postcss';
    import { ToastContainer , FlatToast }  from "svelte-toasts";
    import { Header , Drawer , SideMenu , BrandModal } from '$lib/components';

    export let data;
    const { route } = data;

    $: console.log(route.id)
</script>

<div class="app">
    <Header/>
    <Drawer>
        <div>
            <slot/>
        </div>
        <SideMenu slot="menu" />
    </Drawer>
</div>
<ToastContainer let:data={data}>
    <FlatToast {data} />
</ToastContainer>
<BrandModal route={route.id}/>


<style>
    /* .app {
        min-height:100vh;
    } */
</style>