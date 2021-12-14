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
  }
}
</script>
