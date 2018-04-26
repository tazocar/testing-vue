<template>
  <div class="login">
    <h2>{{ userName }} ha Logeado c:</h2>
    <router-link to="/firstComponent"><a>Testeando Lista</a></router-link>
    <router-link to="/helloworld"><a>Hello World</a></router-link> 
    <button @click="logout">Salir</button>

  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    name: 'hello',
    data () {
      return {
        userName: ''
      }
    },
    methods: {
      renderUserName: () => {
        let user = firebase.auth().currentUser;
        if (user) {
          // check for user and display his name
          let userNameData = firebase.database().ref('users/' + user.uid + '/username');
          userNameData.on('value', (snapshot) => {
            this.userName = snapshot
          })
          
        } else {
          console.log('none')
        }
      },
      logout: () => {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    },
    beforeMount(){
      this.renderUserName()
    }
  }
</script>


