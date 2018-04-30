<template>
  <div class="login">
    <Testing v-bind:options="menu"></Testing>
    <h2>{{ userName }} ha Logeado c:</h2>
    <Graph :elementId="'myChartOne' ":data="[20,5]" :chartName="'Total de Entregas'" :labels="['Encontrados', 'No Encontrados']"></Graph>
    <Graph :elementId="'myChartTwo' ":data="[7,14]" :chartName="'Total de pruebas'" :labels="['Encontrados', 'No Encontrados']"></Graph>
    <router-link to="/dani"><a>Perfil de Dani</a></router-link>
    <router-link to="/juan"><a>Perfil de Juan</a></router-link>
    <router-link to="/firstComponent"><a>Testeando Lista</a></router-link>
    <router-link to="/helloworld"><a>Hello World</a></router-link> 
    <button @click="logout">Salir</button>

  </div>
</template>

<script>
  import firebase from 'firebase'
  import Testing from './Testing'
  import Graph from './Graph'
  export default {
    name: 'hello',
    data: function() {
      return {
        userName: '',
        menu: [
          {name:'Perfil de Juan', url: 'juan'},
          {name:'Testeando Lista', url: 'firstComponent'},
          {name:'Hello World', url: 'helloworld'},
        ]
      }
    },
    components: {
      Testing,
      Graph
    },
    methods: {
      renderUserName: function() {
        let user = firebase.auth().currentUser;
        if (user) {
          // check for user and display his name
          let userNameData = firebase.database().ref('users/' + user.displayName + '/username');
          userNameData.on('value', (snapshot) => {
            this.userName = snapshot.val()
          })
          console.log(user.displayName)
        } else {
          console.log('none')
        }
      },
      logout: function() {
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


