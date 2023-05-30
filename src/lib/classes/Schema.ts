
class TelemetrySchema {
    telemetry_name: string;
    telemetry_fields: JSON;

    constructor(name: string, fields: JSON) {
        this.telemetry_name = name;
        this.telemetry_fields = fields;
    }
}

export {TelemetrySchema};