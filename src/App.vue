<script>
import { RouterView } from 'vue-router';

export default {
  components:{ RouterView },
};
</script>

<template>
  <div class="wrap">
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.wrap{
  height: 100%;
}
</style>
