<script lang="ts">
	import type { TelemetrySchema } from '$lib/classes/Schema';
	import { camelToSpaced } from '$lib/helpers/NameHelpers';
	import { telemetryStore } from '$lib/stores/TelemetryStore';
	import ArrayField from './ArrayField.svelte';
	import MapField from './MapField.svelte';

	export let item: TelemetrySchema;

	let fieldStore: Map<string, string>;

	telemetryStore.subscribe((value) => {
		if (value) {
			fieldStore = value;
		}
	});

	const getValue = (fieldName: string): string => {
		if (fieldStore) {
			return fieldStore.get(fieldName) || 'no info';
		} else {
			return 'no store';
		}
	};
</script>

<li class="parent" style="max-width: 20rem;">
	<h2>{camelToSpaced(item.telemetry_name)}</h2>
	<ul>
		{#each item.telemetry_fields as field}
			<li class="parent">
				<h3>{camelToSpaced(field['name'])}</h3>
				{#if field['type'] == 'array'}
					<ArrayField field={field['content']} />
				{:else if field['type'] == 'map'}
					<MapField field={field['content']} />
				{:else}
					<h4>Value: {getValue(field['name'])}</h4>
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
	h2,
	h3,
	h4 {
		margin: 1rem;
	}
</style>
