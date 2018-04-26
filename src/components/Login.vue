<template>
	<div class="login">
		<h2>Logeate</h2>
		<input type="text" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password">
		<button @click="signIn">Conectar</button>
		<router-link to="/signup"><button>Registrar</button></router-link>
		<router-link to="/hello"><button>Hello</button></router-link>
	</div>
</template>

<script>
	import firebase from 'firebase'
	export default {
		name: 'login',
		data: function() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			signIn: function() {
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('hello')
					},
					(err) => {
						alert('Error: ' + err.message)
					}
				);
			}
		}
	}
</script>