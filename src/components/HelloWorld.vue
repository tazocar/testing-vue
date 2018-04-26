<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Links de prueba</h2>
    <router-link to="/hello"><button>Hello</button></router-link>
    <ul>
      <li>
        <a
          href="http://localhost:8080/#/sell"
        >
          Sell
        </a>
      </li>
      <li>
        <a
          href="http://localhost:8080/#/login"
        >
          Login
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Aprendiending Vue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
