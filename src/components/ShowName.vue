<template>
	<div class="ShowName">
		<h1>Welcome {{ $route.params.name }}</h1>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'ShowName',
		data: () =>{
			return {
				userName: ''
			}
		},
		methods: {
			findExistance: (element) => {
				let user = firebase.auth().currentUser;
				// check for user and display his name
        let userNameData = firebase.database().ref('users/' + user.uid + '/username');
        userNameData.on('value', (snapshot) => {
          this.userName = snapshot
        })
        console.log(element.userName)
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
		}
	}
</script>