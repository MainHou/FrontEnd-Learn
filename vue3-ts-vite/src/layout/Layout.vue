<template>
  <div class="container">
    <nav>
      <router-link to="/">home</router-link>
      <router-link to="/about">about</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
$blue: rgb(14, 26, 252);
.container {
  width: 800px;
  margin: 0 auto;
  text-align: center;
  color: $blue;
  nav a {
    margin-right: 5px;
  }
}
</style>
