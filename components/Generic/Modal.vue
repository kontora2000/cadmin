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
          <slot name="body" />
        </section>
        <footer class="modal-card-foot">
          <button
            v-for="button in buttons"
            :key="button.id"
            :class="button.type"
          >
            {{ button.text }}
          </button>
        </footer>
      </div>
    </div>
  </transition>
</template>
<script lang="ts">
import { defineComponent, PropType, } from '@nuxtjs/composition-api'
import { useModal, } from '~/composition/modal'

export default defineComponent({
  name: 'Modal',
  setup () {
    const { hideModal, buttons, } = useModal()

    return {
      buttons,
      hideModal,
      generateKey: () => Symbol(Date.now()),
    }
  },
})
</script>
