<template>
  <h1>Stars: {{ $store.state.stars }}</h1>
</template>

<script>
import axios from 'axios'

  export default {
    // fetch({ store, params }) {
    //   return axios.get('http://my-api/stars').then(res => {
    //     store.commit('setStars', res.data)
    //   })
    // }
    // ,    
    // async asyncData({ params }) {
    //     let { data } = await axios.get(`https://my-api/posts/${params.id}`)
    //     return { title: data.title }
    // }
  }
</script>