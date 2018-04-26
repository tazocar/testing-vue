<template>
	<div class="Testing	">
		<ul>
			<li v-for="option in options">{{option.name}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	props: ['options'],
  name: 'Testing'
}
</script>