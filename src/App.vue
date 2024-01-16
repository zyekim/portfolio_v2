<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2f3b47;
  margin: 0 auto;
}

.app-nav {
  padding: 30px;
}

.app-nav a {
  font-weight: bold;
  color: #2f3b47;
}

.app-nav a.router-link-exact-active {
  color: #42b983;
}
</style>
