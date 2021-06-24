<template>
  <header class="navbar">
    <NuxtLink class="navbar__logo" to="/">
      <img src="/logo.svg" alt="Secondary - Page d'accueil" />
    </NuxtLink>
    <nav class="navbar__nav">
      <ul>
        <li>
          <NuxtLink to="/">Accueil</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/tarif">Tarification</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
}
</script>

<style lang="scss" scoped>
.navbar {
  display: flex;
  height: 60px;
  align-items: center;

  &__logo {
    height: 57px;
    width: 170px;
  }

  &__nav {
    font-family: $font-roboto;
    font-size: 1rem;
    flex: 1;
    display: flex;
    justify-content: center;

    ul {
      list-style: none;
      display: flex;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: $eden;
      padding: 0 8px;

      &:visited {
        color: $eden;
      }
    }
  }
}
</style>
