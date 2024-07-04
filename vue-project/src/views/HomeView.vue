<script setup lang="tsx">
// import TheWelcome from '../components/TheWelcome.vue'
const Foo = (props: { msg: string }) => {
  return <div>{props.msg}</div>
}
</script>

<template>
  <main>
    <Foo :msg="'hello vue'" />
  </main>
</template>
