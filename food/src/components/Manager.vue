<template>
  <div id="manager">
    <h1>{{ msg }}</h1>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Updated At</th>
          <th>&nbsp;</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for='food in foods' :key='food.id'>
          <td>{{ food.id }}</td>
          <td>{{ food.title }}</td>
          <td>{{ food.updatedAt }}</td>
          <td class="text-right">
            <a href="#" @click.prevent="populatefoodToEdit(food)">Edit</a> -
            <a href="#" @click.prevent="deletefood(food.id)">Delete</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
// import api from '@/api'
export default {
  name: 'manager',
  data () {
    return {
      msg: 'x',
      loading: false,
      food: [],
      model: {}
    }
  },
  async created () {
    this.refreshPosts()
  },
  methods: {}
}
</script>

<style scoped>
</style>