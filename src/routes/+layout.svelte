<script>
    import '../app.postcss';
    import { ToastContainer , FlatToast }  from "svelte-toasts";
    import { Header , Drawer , SideMenu } from '$lib/components';
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

<style>
    /* .app {
        min-height:100vh;
    } */
</style>