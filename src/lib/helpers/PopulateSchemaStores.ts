import type { TelemetrySchema } from "$lib/classes/Schema";
import { telemetryStore } from "$lib/stores/TelemetryStore";

export const populateStores = (input: TelemetrySchema[]) => {
    for (const schema of input) {
        const schemaName = schema.telemetry_name;
        for (const field of schema.telemetry_fields) {
            if (!(field.content)) {
                addStringFieldToStore(schemaName + field.name);
            } else {
                if (field.type == "array") {
                    addArrayFieldToStore(schemaName + field.name)
                } else {
                    addMapFieldToStore(schemaName + field.name)
                }
            } 
        }
    }
}

const addStringFieldToStore = (input: string) => {
    telemetryStore.update((store) => store.set(input, "default"))
}

const addArrayFieldToStore = (input: string) => {
    const testMap: Map<string, string> = new Map();
    testMap.set("key1", "value1");
    testMap.set("key2", "value2");
    const testMap2: Map<string, string> = new Map();
    testMap.set("key1a", "value1a");
    testMap.set("key2a", "value2a");
    telemetryStore.update((store) => store.set(input, [testMap, testMap2]))
}

const addMapFieldToStore = (input: string) => {
    const testMap: Map<string, string> = new Map();
    testMap.set("key1", "value1");
    testMap.set("key2", "value2");
    telemetryStore.update((store) => store.set(input, testMap))
}