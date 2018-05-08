<template>
  <el-menu
    :default-active="active"
    mode="horizontal"
    background-color="#393E46"
    text-color="#fff"
    active-text-color="#F07B3F">
    <el-menu-item v-for="item in menu" :key="item.title" :index="item.route">{{item.title}}</el-menu-item>
    <el-menu-item index="2" @click="logout">Salir</el-menu-item>
  </el-menu>
</template>
<script>
   import firebase from 'firebase'
  export default {
    data() {
      return {
        active: '1',
        menu: [
          {
            title: 'Perfil',
            route: 'dani',
          },
          {
            title: 'Pedro',
            route: 'pedro',
          },
          {
            title: 'Cosa2',
            route: 'cosa2',
          },
        ]
      };
    },
    props: ['options'],
    methods: {
      logout: function() {
        firebase.auth().signOut().then(() => {
          this.$router.replace('login')
        })
      }
    }
  }
</script>