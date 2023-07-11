<script lang="ts">
	import type { TelemetrySchema } from "$lib/classes/Schema";
	import ArrayField from "./ArrayField.svelte";

    export let item: TelemetrySchema;
</script>

<style>
    .parent {
        border: 1px solid black;
        margin : 1rem;
        max-width: 70%;
        list-style-type: none;
    }
</style>

<li class="parent" style="max-width: 30rem;">{item.telemetry_name}
    <ul>
        {#each item.telemetry_fields as field}
            <li class="parent">
                <ul>
                    <li>
                        <h3>{field["name"]}</h3>
                    </li>
                    {#if field["type"] == "array"}
                        <ArrayField field={field["content"]}/>
                    {/if}
                </ul>
            </li>
        {/each}
    </ul>
</li>