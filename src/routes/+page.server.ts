import * as fs from 'fs';
import * as path from 'path';
import { TelemetrySchema } from '$lib/classes/Schema';
import type { PageServerLoad } from './$types';


export const load = (async () => {
    const telemetry_fields: TelemetrySchema[] = [];

    const schema: Record<string, () => Promise<unknown>> = import.meta.glob('../../src/data_schema/telemetry/*.*');
    for (const modulePath in schema) {
        telemetry_fields.push(
            new TelemetrySchema(
                modulePath.split('/').slice(-1)[0].split('.')[0],
                JSON.parse(fs.readFileSync(path.resolve('./src' + modulePath.replace("..", "")), 'utf-8'))
            )
        );
    }

    return {
        telemetry_fields: structuredClone(telemetry_fields)
    };
}) satisfies PageServerLoad;