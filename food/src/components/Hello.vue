<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Food Lover Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">V-Share</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Happy Cow</a></li>
      <li><a href="http://chat.vuejs.org/" target="_blank" rel="noopener">Vegenauts</a></li>
    </ul>
    <h2>App Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'food',
  data () {
    return {
      msg: 'Welcome to Vue.js out of this planet food PWA CRUD'
    }
  }
}
</script>

<style >
.hello {
   color: #2c3e50;
}
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

.hello a {
  color: #35495E;
}
</style>
