<script lang="ts">
	import * as fs from 'fs';
	import * as path from 'path';
	import { TelemetrySchema } from '$lib/classes/Schema';
	import Fields from './telemetry_fields/Fields.svelte';

	export let telemetry_fields: TelemetrySchema[] = [];

	const schema: any = import.meta.glob('../../../src/data_schema/telemetry/*.*');

	for (const modulePath in schema) {
		telemetry_fields.push(
			new TelemetrySchema(
				modulePath.split('/').slice(-1)[0].split('.')[0],
				JSON.parse(fs.readFileSync(path.resolve('./src/.' + modulePath), 'utf-8'))
			)
		);
	}

	// TODO: Figure out how to make Vec and Json work when displaying
</script>

<ul>
	{#each telemetry_fields as item}
		<Fields {item} />
	{/each}
</ul>
