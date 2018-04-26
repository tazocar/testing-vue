<template>
 <!-- Separalos en componentes -->
	<div class="ShowOther" v-if="itIsMe == false">
		<h1>Perfil de {{ $route.params.name }}</h1>
		<h2>bienvenid@ {{ userName }}</h2>
		<router-link to="/hello"><button>Hello</button></router-link>
	</div>
	<div class="ShowMe" v-else-if="itIsMe == true">
		<h1>Bienvenido a tu propio perfil {{ $route.params.name }}</h1>
		<h2>username: {{ userName }}</h2>
		<router-link to="/hello"><button>Hello</button></router-link>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'ShowName',
		data: function() {
			return {
				userName: '',
				itIsMe: false,
			}
		},
		methods: {
			findMe: function() {
				let user = firebase.auth().currentUser;
				if (user) {
					// check for user and display his name
	        let userNameData = firebase.database().ref('users/' + user.displayName + '/username');
	        userNameData.on('value', (snapshot) => {
	          this.userName = snapshot.val()
	        })
				}
			},
			/* logOnConsole: (element) => {
				// si uso "this" directamente en este método no funciona, así que lo tomo como parámetro
				console.log(element.$route.params.name)
			} */
		},
		beforeMount() {
			// console.log(this.$route.params.name)
			// ejecuto en este componente usando este componente como parámetro
			// this.logOnConsole(this)
			this.findMe()
			if (this.userName.toLowerCase() === this.$route.params.name.toLowerCase()) {
				console.log('it is')
				this.itIsMe = true
			} else {
				console.log('nope')
				this.itIsMe = false
			}
		}
	}
</script>