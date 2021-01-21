<template>
  <div>
    <p>{{counter}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter:'testf  ',
    };
  },
  methods: {
   
  },
  beforeCreate() {alert('beforeCreate')},
  created(){alert('created')},
  beforeMount(){alert('beforeMount')},
  mounted() {alert('mounted')},
  beforeUpdate() {alert('beforeUpdate')},
  updated(){alert('updated')}
};
</script>

<style>


</style>
