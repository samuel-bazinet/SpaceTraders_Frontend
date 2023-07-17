import { writable, type Writable } from "svelte/store";

export type TelemetryStoreType = Map<string, number | string | string[] | Map<string, string> | Map<string, string>[] >;

export const telemetryStore: Writable<TelemetryStoreType> = writable(new Map());