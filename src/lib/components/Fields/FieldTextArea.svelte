<script>
    export let label = '';
    export let name = '';
    export let ph = '';
</script>

<div class="form-group">
    <label for="" class="label text-sm">{label}</label>
    <textarea name={name} 
    class="textarea textarea-bordered w-full" placeholder={ph} />
</div>