<script lang="ts">
	let count = 0;
	$: {
		console.log(count * 2);
	}
</script>

<button on:click={() => (count += 1)}>{count}</button>
