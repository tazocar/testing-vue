<template>
	<div class="Testing">
			<router-link to=${option.url}><button v-for="option in options">{{option.name}}</button></router-link>
	</div>
</template>

<script>
export default {
	props: ['options'],
  name: 'Testing'
}
</script>