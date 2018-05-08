<template>
	<div class="signup">
		<el-row type="flex" justify="center">
			<el-col :sm="12" :lg="6">
				<div class="mainContainer">
					<el-form>
						<div class="titleContainer">
							<h2>Regístrate</h2>
						</div>
							<!-- v-model to bind the content of my input to the "email" or "password" data return (like a variable)-->
							<el-form-item>
								<el-input type="text" placeholder="Nombre de usuario" v-model="userName"></el-input>
							</el-form-item>
							<el-form-item>
								<el-input type="text" v-model="email" placeholder="Email"></el-input>
							</el-form-item>
							<el-form-item>
								<el-input type="password" v-model="password" placeholder="Password"></el-input>
							</el-form-item>
							<el-form-item>
								<el-button type="primary" v-on:click="signup">Registrar</el-button>
								<p>¿Ya estás registrado? <router-link to="/login">Volver al Login</router-link></p>
							</el-form-item>
						</el-form>
				</div>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import firebase from 'firebase'
	export default {
		name: 'signup',
		data: function() {
			return {
				email: '',
				password: '',
				userName: '',
				input: ''
			}
		},
		methods: {
			signup: function() {
				// console.log(this.email)
				firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						// creatind user DB
						firebase.database().ref('users/' + this.userName).set({
		          userId: user.uid,
		          email: user.email,
		          username: this.userName
	        	});
	        	// Set User Info
	        	var currentUser = firebase.auth().currentUser
	        	currentUser.updateProfile({
						  displayName: this.userName,
						}).then(function() {
						  // Update successful.
						}).catch(function(error) {
						  // An error happened.
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
<style scoped>
	.titleContainer {
		background-color: #232931;
		color: #FFF;
		padding: 0.5em;
		border-radius: 0.5em 0.5em 0 0;
		margin-bottom: 2em;
	}
	.mainContainer{
		background-color: #FFF;
	}
	.el-input {
		width: 90%;
	}
	.el-button--primary:hover {
    background-color: #393E46;
    border-color: #393E46;
	}
	.el-button--primary {
    background-color: #F07B3F;
    border-color: #F07B3F;
	}
	a {
		color: #F07B3F;
		text-decoration: none;
	}
</style>