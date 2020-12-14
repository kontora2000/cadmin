<template>
  <aside>
    <section class="main-content columns is-fullheight">
      <aside class="column is-2 is-narrow-mobile is-fullheight section is-hidden-mobile">
        <p class="menu-label is-hidden-touch">
          Candidate.top
        </p>
        <ul class="menu-list">
          <li>
            <nuxt-link to="/edit/news">
              Новости
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/edit/candidates">
              Кандидаты
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/edit/parties">
              Партии
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/edit/settings">
              Настройки
            </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/logout">
              Выход
            </nuxt-link>
          </li>
        </ul>
      </aside>
    </section>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  name: 'Aside',

  setup () {

  }
})
</script>
