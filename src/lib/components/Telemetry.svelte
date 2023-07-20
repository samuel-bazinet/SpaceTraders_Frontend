<script lang="ts">
	import type { TelemetrySchema } from "$lib/classes/Schema";
	import { populateStores } from "$lib/helpers/PopulateSchemaStores";
	import Fields from "./telemetry_fields/Fields.svelte";

	export let telemetry_fields: TelemetrySchema[];

	populateStores(telemetry_fields);

</script>

<div class="flex-container">
	{#each telemetry_fields as item}
		<Fields {item} />
	{/each}
</div>

<style>
	.flex-container {
		display: flex;
	}
</style>
