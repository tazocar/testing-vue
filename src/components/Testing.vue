<template>
	<div class="Testing">
			<router-link  v-for="option in options" :to="option.url"><button>{{option.name}}</button></router-link>
	</div>
</template>

<script>
export default {
	props: ['options'],
  name: 'Testing'
}
</script>