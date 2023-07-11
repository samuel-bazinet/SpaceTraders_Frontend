<script lang="ts">
	import ArrayField from "./ArrayField.svelte";

    export let field: JSON;
</script>

<ul>
    <li>
        Key: {field["keyType"]}
    </li>
        {#if field["keyType"] == "array"}
            <ArrayField field={field["content"]} />
        {:else if field["keyType"] == "map"}
            <svelte:self field={field["content"]} />
        {/if}
    <li>
        Value: {field["valueType"]}
    </li>
        {#if field["valueType"] == "array"}
            <ArrayField field={field["content"]} />
        {:else if field["valueType"] == "map"}
            <svelte:self field={field["content"]} />
        {/if}
</ul>