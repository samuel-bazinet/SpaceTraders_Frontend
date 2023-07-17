<script lang="ts">
	import type { TelemetrySchema } from '$lib/classes/Schema';
	import type { TelemetryStoreType } from '$lib/stores/TelemetryStore';
	import { camelToSpaced } from '$lib/helpers/NameHelpers';
	import { telemetryStore } from '$lib/stores/TelemetryStore';
	import ArrayField from './ArrayField.svelte';
	import MapField from './MapField.svelte';

	export let item: TelemetrySchema;

	let fieldStore: TelemetryStoreType;

	telemetryStore.subscribe((value) => {
		if (value) {
			fieldStore = value;
		}
	});

	const getValue = (fieldName: string): string | number => {
		if (fieldStore) {
			return (fieldStore.get(fieldName) as string | number) || 'no info';
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
				<h3>{camelToSpaced(field.name)}</h3>
				{#if field.content}
					{#if field.type == 'array'}
						<ArrayField field={field['content']} fieldName={item.telemetry_name + field.name} />
					{:else if field.type == 'map'}
						<MapField field={field['content']} fieldName={item.telemetry_name + field.name} data={undefined}/>
					{/if}
				{:else}
					<h4>Value: {getValue(item.telemetry_name + field.name)}</h4>
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
