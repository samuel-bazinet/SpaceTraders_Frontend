import type { TelemetrySchema } from "$lib/classes/Schema";
import { writable, type Writable } from "svelte/store";

export const telemetryStore: Writable<Map<string, string>> = writable(new Map());