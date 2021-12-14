<template>
  <div @click="clickBtn">按钮组件</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'CwhButton'
})
export default class Button extends Vue {
  clickBtn() {
    alert('按钮点击')
    console.log('按钮被点击')
  }
}
</script>
