# c-ui demo page

```sh

yarn add cwh-ui

```

### Button组件
```vue demo
<template>
  <div id="app">
    <CwhButton />
  </div>
</template>

<script>
import { Button as CwhButton } from 'cwh-ui'

export default {
  name: 'App',
  components: {
    CwhButton
  }
}
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
``` 
