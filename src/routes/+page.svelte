<script lang="ts">
	import Telemetry from '../lib/components/Telemetry.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<h1>Welcome to SpaceTraders:</h1>
<h2>Sam's Attempt</h2>
<Telemetry telemetry_fields={data.telemetry_fields}/>
