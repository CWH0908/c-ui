<template>
  <div :class="$style.container">
    点击次数{{ count }}
    <div :class="$style.btn" @click="clickBtn">按钮组件</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  name: 'CwhButton'
})
export default class Button extends Vue {
  count: number = 0
  clickBtn() {
    this.count = this.count++
    console.log('按钮被点击')
  }
}
</script>

<style lang="scss" module>
@import './button.scss';
</style>
