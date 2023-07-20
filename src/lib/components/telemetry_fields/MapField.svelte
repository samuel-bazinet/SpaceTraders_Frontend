<script lang="ts">
	import type { ContentSchema } from '$lib/classes/ContentSchema';
	import { telemetryStore, type TelemetryStoreType } from '$lib/stores/TelemetryStore';

	export let field: ContentSchema | undefined;
	export let fieldName: string;
	export let data: Map<string, string> | undefined;

	let fieldStore: TelemetryStoreType;

	telemetryStore.subscribe((value) => {
		if (value) {
			fieldStore = value;
		}
	});

	const getMapValue = (fieldName: string): Map<string, string> => {
		if (fieldStore) {
			return (fieldStore.get(fieldName) as Map<string, string>) || ['no info'];
		} else {
			console.warn(`no field store for Map with name ${fieldName}`);
			return new Map();
		}
	};
</script>

{#if field}
	<table>
		<tr>
			<th>Key</th>
			<th>Value</th>
		</tr>

		{#each Array.from(getMapValue(fieldName)) as row}
			<tr>
				<td>
					{row[0]}
				</td>
				<td>
					{row[1]}
				</td>
			</tr>
		{/each}
	</table>
{:else if data}
	{#each Array.from(data) as row}
		<tr>
			<td>
				{row[0]}
			</td>
			<td>
				{row[1]}
			</td>
		</tr>
	{/each}
{/if}

<style>
	table {
		margin: 1rem;
	}
	table,
	th,
	td {
		border: 0.5px solid;
		border-collapse: collapse;
	}

	th,
	td {
		padding: 0.5rem;
	}
</style>
