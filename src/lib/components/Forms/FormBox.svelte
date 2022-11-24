<script>
    import { Form } from '$lib/components';
    export let btn;
    export let title;
    export let noDivider = false;
</script>

<div class="form text-center" style="width: min(40rem,100%);">
    <h2 class="text-3xl text-primary">{title}</h2>
    {#if !noDivider}
        <div class="divider"></div>
    {/if}
    <Form {btn}>
        <slot></slot>
    </Form>
</div>