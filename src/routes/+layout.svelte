<script>
    import '../app.postcss';
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

<style>
    /* .app {
        min-height:100vh;
    } */
</style>