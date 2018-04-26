<template>
	<div class="ShowName">
		<h1>Perfil de {{ $route.params.name }}</h1>
		<h2>{{ userName }} ha Logeado c:</h2>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'ShowName',
		data: function() {
			return {
				userName: ''
			}
		},
		methods: {
			findExistance: function() {
				let user = firebase.auth().currentUser;
				if (user) {
					// check for user and display his name
	        let userNameData = firebase.database().ref('users/' + user.uid + '/username');
	        userNameData.on('value', (snapshot) => {
	          this.userName = snapshot
	        })
				}
			},
			logOnConsole: (element) => {
				// si uso "this" directamente en este método no funciona, así que lo tomo como parámetro
				console.log(element.$route.params.name)
			}
		},
		beforeMount() {
			// console.log(this.$route.params.name)
			// ejecuto en este componente usando este componente como parámetro
			this.logOnConsole(this)
			this.findExistance()
		}
	}
</script>