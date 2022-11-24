<script>
    import { Form } from '$lib/components';
    export let btn;
    export let title;
</script>

<div class="form" style="width: min(40rem,100%);">
    <h2 class="text-3xl">{title}</h2>
    <Form {btn}>
        <slot></slot>
    </Form>
</div>