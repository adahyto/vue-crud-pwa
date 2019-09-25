<template>
  <div id="app">
    <header>
      <span>PWA CRUD</span>
      <div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/manager">FirstRoute</router-link></li>
      </ul>
      </div>
    </header>
    <main>
      <img src="./assets/logo.png" alt="Vue.js PWA">
    <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

main {
  text-align: center;
  margin-top: 40px;
}

header {
  display: flex;
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495E;
  
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: .02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
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
  color: #ffffff;
}

</style>
