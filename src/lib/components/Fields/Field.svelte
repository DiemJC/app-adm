<script>
    export let label;
    export let type;
    export let name;
    export let warning = false
    export let ph = '';
    export let fb = '';
</script>

<div class="form-group">
    <label for="" class="label text-sm" class:text-error={warning} >{label}</label>
    <input 
        name={name} 
        type={type} 
        class:input-error={warning} 
        class="input input-bordered form-control w-full" 
        placeholder={ph} 
    >
    {#if warning}
    <label for="" class="label text-sm text-error">{fb}</label>
    {/if}
</div>