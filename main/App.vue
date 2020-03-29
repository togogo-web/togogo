<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<script>
// import Base from 'tool/base';
export default {
  name: "app",
  mounted() {
    // ^use_performance
    // Base.startMointer();
    // $use_performance
  }
};
</script>

<style>
html,
body {
  width: 100%;
  background: #fff;
}
* {
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e55;
}
</style>
