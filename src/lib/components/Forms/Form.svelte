<script>
    import { enhance } from '$app/forms';

    export let btn = 'Button';
    export let cb = () => console.log('Without enhance');
</script>

<form method="POST" use:enhance={cb} >
    <slot></slot>
    <br>
    {#if $$slots.button}
    <slot name="button"></slot>
    {:else}
    <div>
        <button class="btn btn-primary text-white">{btn}</button>
    </div>
    {/if}
</form>