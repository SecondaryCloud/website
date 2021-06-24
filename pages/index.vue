<template>
  <div class="index">
    <div class="index__container">
      <section class="index__hero-banner hero-banner">
        <div class="hero-banner__section">
          <h1 class="hero-banner__title">
            Sauvegardez vos données sans même vous en préoccuper
          </h1>
          <h2 class="hero-banner__subtitle">
            Renseigner votre configuration, <br />
            Secondary se charge de la réplication.
          </h2>
          <a class="hero-banner__button button" href="https://app.secondary.fr">
            Créer ma configuration
          </a>
          <span class="hero-banner__information">
            Secondary est gratuit durant la beta.
          </span>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss">
.index {
  &__container {
    margin: 0 auto;
    width: 90%;

    @include device-is('tablet') {
      max-width: 1220px;
    }
  }
}

.hero-banner {
  display: flex;

  @include device-is('tablet') {
    flex-direction: column;
  }

  &__section {
    width: 50%;
    display: flex;
    flex-direction: column;

    @include device-is('tablet') {
      width: 50%;
    }
  }

  &__title {
    color: $blumine;
    font-family: $font-open-sans;
    font-weight: $font-bold;
    font-size: 1.625rem;
    line-height: 2rem;

    @include device-is('tablet') {
      font-size: 2.75rem;
      line-height: 3.5rem;
    }
  }

  &__subtitle {
    display: block;
    margin-top: 21px;
    color: $blumine;
    font-family: $font-roboto;
    font-weight: $font-normal;
    font-size: 1.625rem;
    line-height: 2rem;
  }

  &__button {
    margin-top: 21px;
    width: 200px;
  }

  &__information {
    margin-top: 14px;
    color: $eden;
    font-family: $font-roboto;
    font-size: 0.8125rem;
  }
}
</style>
