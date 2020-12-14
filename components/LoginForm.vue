<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container">
        <div class="columns is-centered">
          <div class="column is-5-tablet is-4-desktop is-3-widescreen">
            <form class="box" @submit.prevent="login">
              <div class="field">
                <label class="label" for="email">Email</label>
                <div class="control has-icons-left">
                  <input v-model="email" class="input" type="email" placeholder="Ваш@email" required="">
                  <span class="icon is-small is-left"><i class="fa fa-envelope" /></span>
                </div>
              </div>
              <div class="field">
                <label class="label" for="">Пароль</label>
                <div class="control has-icons-left">
                  <input
                    v-model="password"
                    class="input"
                    type="password"
                    placeholder="Пароль"
                    required=""
                  >
                  <span class="icon is-small is-left"><i class="fa fa-lock" /></span>
                </div>
              </div>
              <div class="field">
                <button class="button is-success">
                  Войти
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, } from '@nuxtjs/composition-api'

import { useAuth } from '@/composition/auth'

export default defineComponent({
  name: 'LoginForm',
  setup () {
    const {
      userEmail: email,
      userPass: password,
      login
    } = useAuth()

    const onSubmit = () => {
      login()
    }

    return {
      email,
      password,
      onSubmit,
      login
    }
  }
})
</script>
