<template>
  <div class="firstComponent">
    <h1>First Component {{ msg }}</h1>
    <router-link to="/hello"><button>Hello</button></router-link>
    <ul>
      <li v-for="(element, index) in list">
        {{ index + 1 }} {{ element.name }}
        <button @click="$delete(list, index)">Delete this</button>
      </li>
    </ul>
    <h3 v-if="(list.length <= 2)">2 o menos :c naranja</h3>
    <h3 v-else> Más de 2 YEY! verde</h3>
    <div v-bind:class="{showOrange: (list.length <= 2) , showGreen: (list.length > 2)}"></div>
    <button @click="deleteOne">Delete One</button>
    <h4>{{ newOne }}</h4>
    <input type="" placeholder="Ingresa una fruta" v-model="newOne">
    <button @click="addOne">Add One</button>
  </div>
</template>

<script>
  export default {
    name: 'firstComponent',
    data () {
      return {
        msg: 'Probando Data',
        newOne: '',
        list: [
          {name: 'Manzanas'},
          {name: 'Peras'},
          {name: 'Uvitas'}
        ]
      }
    },
    methods: {
      deleteOne: function() {
        this.list.pop()
      },
      addOne: function() {
        this.list.push({ name: this.newOne })
        this.newOne = '';
      },
      /* deleteThis: function(index) {
        this.list.splice(index, 1)
      } */
    }
  }
</script>

<style scoped>
.showOrange {
  background-color: orange;
  width: 100%;
  height: 1em;
}
.showGreen {
  background-color: green;
  width: 100%;
  height: 1em;
}
h1, h2 {
  font-weight: bolder;
}
a {
  color: #42b983;
}
</style>
