<template>
  <div id="app">
    <bl-icon-av
      name="ico_camera"
      color="active-lighter"
    />
  </div>
</template>

<script>
import BlIconAv from './components/BlIconAv';

export default {
  name: 'App',
  components: {
    BlIconAv,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
