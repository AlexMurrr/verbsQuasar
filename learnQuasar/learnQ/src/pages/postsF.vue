<template>
  <q-page padding>
   posts
  </q-page>
</template>

<script>
export default {
  name: 'postsF',
  data(){
    return {
      posts: [],
    }
  },
  created(){
    this.$axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(respons => {
      this.posts = respons.data
    })
  }
}
</script>
