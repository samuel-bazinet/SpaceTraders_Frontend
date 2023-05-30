<script lang="ts">
    import * as fs from 'fs';
    import * as path from 'path';
    import { TelemetrySchema } from '\$lib/classes/Schema';

    export let telemetry_fields: TelemetrySchema[] = [];

    const schema: any = import.meta.glob("../../../src/data_schema/telemetry/*.*");

    for (const modulePath in schema) {
        telemetry_fields.push(new TelemetrySchema(modulePath.split("/").slice(-1)[0].split(".")[0],JSON.parse(fs.readFileSync(path.resolve("./src/." + modulePath), 'utf-8'))))
    }

    // TODO: Figure out how to make Vec and Json work when displaying

</script>
<ul>
{#each telemetry_fields as item}
    <li>{item.telemetry_name}</li>
    <ul>
        {#each item.telemetry_fields as field}
            <li><div>
                name: {field["name"]}<br/>
                type: {field["type"]}
            </div></li>
        {/each}
    </ul>
{/each}
</ul>