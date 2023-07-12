import type { TelemetrySchema } from "$lib/classes/Schema";
import { telemetryStore } from "$lib/stores/TelemetryStore";

export const populateStores = (input: TelemetrySchema[]) => {
    for (const schema of input) {
        let schemaName = schema.telemetry_name;
        
    }
}

const addFieldToStore = (input: string) => {
    telemetryStore.update((store) => store.set(input, "default"))
}