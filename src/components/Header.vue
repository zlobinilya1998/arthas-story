<script setup>
</script>

<template>
  <div class="header">
    <div class="header-inner">
      <div>1</div>
      <div>2</div>
    </div>
    
  </div>
</template>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 20px;
  width: 100%;
  z-index: 1;
  &-inner {
    padding: 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>
