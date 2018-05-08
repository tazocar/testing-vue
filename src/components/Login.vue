<template>
	<div class="login">
		<el-row type="flex" justify="center">
			<el-col :sm="12" :lg="6" class="mainContainer">
				<el-form>
					<div class="titleContainer">
						<h2>Login</h2>
					</div>
					<el-form-item>
						<el-input type="text" v-model="email" placeholder="Email" ></el-input>
					</el-form-item>
					<el-form-item>
						<el-input type="password" v-model="password" placeholder="Password"></el-input>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="signIn">Conectar</el-button>
						<p>No estás registrado? <router-link to="/signup">Registrate Aquí</router-link></p>
					</el-form-item>
				</el-form>
			</el-col>
		</el-row>
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
		border-radius: 0.5em 0.5em 0 0;
	}
	.el-input {
		width: 90%;
	}
	.el-button--primary {
    background-color: #393E46;
    border-color: #393E46;
	}
	.el-button--primary:hover {
    background-color: #F07B3F;
    border-color: #F07B3F;
	}
	a {
		color: #F07B3F;
		text-decoration: none;
	}
</style>