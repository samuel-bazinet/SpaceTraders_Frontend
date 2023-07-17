import type { FieldSchema } from "./FieldSchema";

export class TelemetrySchema {
    telemetry_name: string;
    telemetry_fields: FieldSchema[];

    constructor(name: string, fields: FieldSchema[]) {
        this.telemetry_name = name;
        this.telemetry_fields = fields;
    }
}