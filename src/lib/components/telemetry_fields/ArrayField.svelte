<script lang="ts">
	import type { ContentSchema } from '$lib/classes/ContentSchema';
	import { telemetryStore, type TelemetryStoreType } from '$lib/stores/TelemetryStore';
	import MapField from './MapField.svelte';

	export let field: ContentSchema;
	export let fieldName: string;

	let fieldStore: TelemetryStoreType;

	telemetryStore.subscribe((value) => {
		if (value) {
			fieldStore = value;
		}
	});

	const getStringValue = (fieldName: string): string[] => {
		if (fieldStore) {
			return (fieldStore.get(fieldName) as string[]) || ['no info'];
		} else {
			return ['no store'];
		}
	};

	const getMapValue = (fieldName: string): Map<string, string>[] => {
		if (fieldStore) {
			return (fieldStore.get(fieldName) as Map<string, string>[]) || ['no info'];
		} else {
			console.warn(`no field store for Map with name ${fieldName}`);
			return [new Map()];
		}
	};
</script>

{#if field.content}
	{#if field.type == 'map'}
		<table>
			<tr>
				<th>Key</th>
				<th>Value</th>
			</tr>
			{#each getMapValue(fieldName) as item}
				<MapField field={undefined} {fieldName} data={item} />
			{/each}
		</table>
	{/if}
{:else}
	<ul>
		{#each getStringValue(fieldName) as item}
			<li>
				{item}
			</li>
		{/each}
	</ul>
{/if}

<style>
	table {
		margin: 1rem;
	}
	table,
	th {
		border: 0.5px solid;
		border-collapse: collapse;
	}
	th {
		padding: 0.5rem;
	}
</style>
