<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import { onMount } from 'svelte';

	let todos = $state<string[]>([]);
	let todoText = $state('');

	onMount(() => {
		const existingTodos = localStorage.getItem('svelte_todos');
		todos = existingTodos ? JSON.parse(existingTodos) : [];
	});

	function addTodo() {
		if (!todoText.trim()) return;
		todos = [...todos, todoText.trim()];
		localStorage.setItem('svelte_todos', JSON.stringify(todos));
		todoText = '';
	}
</script>

<main>
	<ul>
		{#each todos as todo}
			<li>{todo}</li>
		{/each}
	</ul>

	<form
		onsubmit={(e) => {
			e.preventDefault();
			addTodo();
		}}
	>
		<input bind:value={todoText} />
		<input type="submit" value="Add todo" />
	</form>
</main>

<style>
	/* TODO Style */
</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>
