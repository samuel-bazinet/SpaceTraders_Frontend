<script lang="ts">
	import type { TelemetrySchema } from '$lib/classes/Schema';
	import { camelToSpaced } from '$lib/helpers/NameHelpers';
	import ArrayField from './ArrayField.svelte';
	import MapField from './MapField.svelte';

	export let item: TelemetrySchema;
</script>

<li class="parent" style="max-width: 30rem;">
	{item.telemetry_name}
	<ul>
		{#each item.telemetry_fields as field}
			<li class="parent">
				<h3>{camelToSpaced(field['name'])}</h3>
				<h4>Value:</h4>
				{#if field['type'] == 'array'}
					<ArrayField field={field['content']} />
				{:else if field['type'] == 'map'}
					<MapField field={field['content']} />
				{/if}
			</li>
		{/each}
	</ul>
</li>

<style>
	.parent {
		border: 1px solid black;
		margin: 1rem;
		max-width: 70%;
		list-style-type: none;
	}
</style>
