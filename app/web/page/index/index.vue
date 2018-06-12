<template>
  <app-layout description="the description" keywords="the keywords">
    <div>Index</div>
  </app-layout>
</template>
<style>
@import "index.css";
</style>
<script type="text/babel">
export default {
  components: {
  },
  data() {
    return {
    };
  },
  computed: {
  },
  methods: {
  },
  mounted() {
    import('service-worker-register').then(sw => {
      console.log(sw);
      sw.default.register('service-worker.js');
    });
  }
};
</script>

