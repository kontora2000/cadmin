<template>
  <transition name="scale-in" :appear="true">
    <div v-if="isNotifVisible" class="common-notification-wrapper">
      <div class="common-notification" :class="'common-notification--' + notificationClass">
        <div class="common-notification__message-wrapper">
          <div class="common-notification__message">
            {{ message }}
          </div><span class="common-notification_close-wrapper">
            <a class="common-notification__close" @click="hideNotification">&times;</a>
          </span>
        </div>
      </div>
    </div>
  </transition>
</template>

<script lang="ts">
import { defineComponent, watch, onBeforeUnmount, } from '@nuxtjs/composition-api'

import { useSnackbar, } from '@/composition/snackbar.ts'

export default defineComponent({
  name: 'CommonNotification',
  setup () {
    const { isVisible: isNotifVisible, hideNotification, message, notificationClass, } = useSnackbar()

    let timerID = 0

    watch(isNotifVisible, () => {
      if (process.client) {
        if (isNotifVisible.value) { timerID = window.setTimeout(hideNotification, 5000) } else {
          clearTimeout(timerID)
        }
      }
    })

    onBeforeUnmount(() => {
      if (process.client) {
        if (timerID !== 0) { window.clearTimeout(timerID) }
      }
    })

    return {
      isNotifVisible,
      hideNotification,
      message,
      notificationClass,
    }
  },
})
</script>

<style lang="scss" scoped>
  .common-notification-wrapper {
      position: fixed;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 102;
      top:10px;
      left:0;
      pointer-events: none;
      max-height: 40px;
  }
  .common-notification {
      pointer-events: auto;
      font-weight: 500;
      font-size: 16px;
      text-align: center;
      align-self: center;
      top:10px;
      left:45%;
      border-radius: 5px;
      max-width: 560px;
      box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
      &__message-wrapper{
          display: flex;
          flex-direction: row;
          align-items: center;
          max-width: 560px;
          min-width: 195px;
          padding: 12px 16px;
          justify-content: space-between;
      }
      &--default {
          background:#fff;
      }
      &--success {
          background-image:linear-gradient(90.21deg, #24B413 0.16%, #1C8E1F 99.82%);
      }
      &--danger {
          background-image:linear-gradient(90.21deg, #FF0031 0.16%, #F20031 99.82%);
      }
      &--warning {
          background-image:linear-gradient(90.21deg, #b6f73e 0.16%, #f8bf21 99.82%)
      }
      &__message{
          color: #fff;
          line-height: 22px;
          font-size: 14px;
          font-weight: 500;
      }
      &_close-wrapper {
          position: relative;
          min-width: 30px;
      }
      &__close{
          cursor: pointer;
          color:#fff;
          font-size: 30px;
          top:-20px;
          position: absolute;
          &:hover, &:active{
              opacity:0.8
          }
      }
  }

</style>
