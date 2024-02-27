<template>
  <main>
    <router-view></router-view>
  </main>
</template>

<script>
  export default {
    name: "HomeView",
  };
</script>

<style lang="scss">
  .portfolio-wrap {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .header {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    z-index: 50;
    &__inner {
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 1280px;
      height: 60px;
    }
    .logo {
      font-weight: 700;
      font-size: 22px;
    }

    .nav {
      display: flex;
      justify-content: space-between;
      align-items: center;
      column-gap: 10px;
      height: 100%;
      p {
        padding: 0 10px;
        font-size: 20px;
        font-weight: 300;
        cursor: pointer;
      }
    }
    &.scroll {
      background-color: #fff;
      transition: all ease-in-out 300ms;
    }
  }

  .highlight {
    display: inline-block;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: -1;
      width: 100%;
      height: 30%;
      // background-color: #c6fcc9;
      background-color: #b0dad5;
    }
  }

  .home {
    width: 100%;
    height: 500px;
    background-color: rgb(246, 248, 236);
    background-image: url(data:image/png;base64,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);
    &__inner {
      margin: 0 auto;
      padding: 60px 20px;
      display: flex;
      width: 100%;
      max-width: 1280px;
      height: 100%;
    }
    &__left {
      flex: 0 1 750px;
      position: relative;
    }
    &__text-wrap {
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      p {
        font-size: 33px;
        font-weight: 500;
        text-align: left;
        &.job {
          margin-top: 10px;
          font-weight: 700;
          font-size: 32px;
        }
      }
    }
  }

  .links {
    $self: ".links";
    margin-top: 12px;
    display: flex;
    column-gap: 10px;
    align-items: center;
    height: 40px;
    &__item {
      position: relative;
      cursor: pointer;
      &:not(:first-of-type) {
        &:before {
          content: "";
          display: inline-block;
          margin-right: 10px;
          vertical-align: middle;
          width: 1px;
          height: 30px;
          background-color: #eee;
        }
      }
      img {
        display: inline-block;
        width: auto;
        height: 30px;
      }
      &:hover {
        #{$self}__tooltip {
          display: block;
          opacity: 1;
          transition: 300ms ease-in-out;
        }
      }
    }
    &__tooltip {
      padding: 5px 10px;
      display: none;
      opacity: 0;
      position: absolute;
      top: calc(100% + 10px);
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
      border-radius: 4px;
      box-shadow: 0 1em 2em -0.5em rgba(0, 0, 0, 0.35);
      background: #333;
      color: #fff;
      z-index: 10;
      transition: 300ms ease-in-out;
      &:before {
        content: "";
        position: absolute;
        top: -5px;
        left: 50%;
        transform: translateX(-50%);
        border: 5px solid transparent;
        border-top-width: 0;
        border-bottom-color: #333;
      }
    }
  }

  section[aria-label="content"] {
    margin: 0 auto;
    padding: 0px 20px;
    width: 100%;
    max-width: 1280px;
    text-align: left;
  }

  .section {
    &-title {
      margin-top: 55px;
      font-size: 30px;
      font-weight: 700;
      color: #356493;
    }

    &-subtitle {
      margin-top: 40px;
      font-size: 24px;
      font-weight: 500;
    }

    &-subtitle2 {
      margin: 18px 0 10px;
      font-size: 18px;
      font-weight: 500;
    }

    &-body {
      font-size: 16px;
      color: #555;
    }

    &-caption {
      margin: 8px 0;
      font-size: 16px;
      font-weight: 500;
      font-style: italic;
      color: #a09f9f;
    }

    &-refer {
      margin-left: 4px;
      font-size: 12px;
      font-weight: 400;
      font-style: italic;
      color: #777;
      &:before {
        content: "*";
      }
    }

    &-divider {
      margin: 10px 0;
      border-top: 1px solid #eee;
    }
  }

  .details {
    margin: 12px 0;

    &__item {
      margin-left: 8px;
      padding: 5px 0;
      padding-left: 4px;
      list-style-type: "-";
      font-weight: 300;
      color: #555;
    }
  }

  .desc-wrap {
    margin: 40px 0;
    display: flex;
    flex-flow: row nowrap;
    column-gap: 50px;
    .section-subtitle {
      margin-top: 0;
    }
    &__content {
      flex-basis: 55%;
    }

    &__right-content {
      align-self: center;
      flex-basis: 45%;
    }
  }

  .skill-chips {
    margin: 10px 0 20px;
    &__item {
      display: inline-block;
      padding: 0 6px;
      margin-right: 5px;
      margin-top: 5px;
      margin-bottom: 5px;
      background: rgba(234, 200, 228, 0.5);
      border-radius: 3px;
      font-size: 14px;
      white-space: nowrap;
    }
  }
</style>

<style lang="scss">
  .custom-type {
    .char.custom.typed {
      color: #2f3b47;
    }
  }
</style>
