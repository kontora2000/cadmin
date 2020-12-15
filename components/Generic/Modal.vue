<template>
  <transition name="fade" appear>
    <div class="modal">
      <div class="modal-background" />
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">
            <slot name="title" />
          </p>
          <button class="delete" aria-label="close" />
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
        </section>
        <footer class="modal-card-foot">
          <button v-for="button in buttons" :class="button.type">
            {{ button.text }}
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Modal',
  props: {
    buttons: {
      type: Array as PropType<object[]>,
      default: () => [],
    }
  }
  setup () {

  },
})
</script>
