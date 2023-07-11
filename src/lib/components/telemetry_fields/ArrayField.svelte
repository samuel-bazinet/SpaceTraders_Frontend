<script lang="ts">
	import MapField from "./MapField.svelte";

    export let field: JSON;
</script>

<ul>
    <li>
        type: {field["type"]}
    </li>
    {#if field["type"] == "array"}
        <svelte:self field={field["content"]} />
    {:else if field["type"] == "map"}
        <MapField field={field["content"]}/>
    {/if}
</ul>