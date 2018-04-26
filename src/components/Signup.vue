<template>
	<div class="signup">
		<h2>Regístrate</h2>
		<!-- v-model to bind the content of my input to the "email" or "password" data return (like a variable)-->
		<input type="text" placeholder="userName" v-model="userName">
		<input type="text" v-model="email" placeholder="Email">
		<input type="password" v-model="password" placeholder="Password">
		<button @click="signup">Registrar</button>
		<router-link to="/login"><button>Volver atrás</button></router-link>
	</div>
</template>

<script>
	import firebase from 'firebase'
	export default {
		name: 'signup',
		data: () => {
			return {
				email: '',
				password: '',
				userName: ''
			}
		},
		methods: {
			signup: () => {
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						// creatind user DB
						firebase.database().ref('users/' + user.uid).set({
		          username: this.userName,
		          email: user.email
	        	});
	          // user.displayName = this.userName
						alert('Su cuenta ha sido creada');
            this.$router.replace('hello');
					},
					(err) => {
						alert('Un error ha ocurrido: ' + err.message)
					}
				);
			},
		}
	}
</script>