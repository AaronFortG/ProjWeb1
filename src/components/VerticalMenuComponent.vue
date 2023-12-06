<script setup>

</script>

<template>
  <div class="hamburger-menu">
    <input id="menu__toggle" type="checkbox" />
    <label class="menu__btn" for="menu__toggle">
      <span></span>
    </label>

    <ul class="menu__box">
      <li><router-link class ="menu__item" to="/create-arena">Create match</router-link></li>
      <li><router-link class ="menu__item" to="/join-arena">Join match</router-link></li>
      <li><router-link class ="menu__item" to="/player-info">Player information</router-link></li>
      <li><router-link class ="menu__item" to="/store">Store</router-link></li>
      <li><router-link class ="menu__item" to="/list-players">Ranking</router-link></li>
      <li><router-link class ="menu__item" to="/">Log out</router-link></li>
    </ul>
  </div>
</template>

<style scoped>


.hamburger-menu {
  display: none;
}

@media (min-width: 600px) {

  .hamburger-menu {
    display: block;
    position: relative;
    z-index: 1;
  }
  #menu__toggle {
    opacity: 0;
  }
  #menu__toggle:checked + .menu__btn > span {
    transform: rotate(45deg);
  }
  #menu__toggle:checked + .menu__btn > span::before {
    top: 0;
    transform: rotate(0deg);
  }
  #menu__toggle:checked + .menu__btn > span::after {
    top: 0;
    transform: rotate(90deg);
  }
  #menu__toggle:checked ~ .menu__box {
    left: 0 !important;
  }
  .menu__btn {
    position: fixed;
    top: 20px;
    left: 20px;
    width: 26px;
    height: 26px;
    cursor: pointer;
    z-index: 2;
    margin-top: 2rem;
  }
  .menu__btn > span,
  .menu__btn > span::before,
  .menu__btn > span::after {
    display: block;
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: white;
    transition-duration: .25s;
  }

  .menu__btn > span::before {
    content: '';
    top: -8px;
  }
  .menu__btn > span::after {
    content: '';
    top: 8px;
  }
  .menu__box {
    display: block;
    position: fixed;
    top: 0;
    left: -100%;
    width: 300px;
    height: 100%;
    margin: 0;
    padding: 80px 0;
    list-style: none;
    background-color: #9d9d9d;
    box-shadow: 2px 2px 6px rgba(0, 0, 0, .4);
    transition-duration: .25s;
  }
  .menu__item {
    display: block;
    padding: 12px 24px;
    color: #333;
    margin: 0.5rem 0;
    font-size: 20px;
    font-weight: 600;
    text-decoration: none;
    transition-duration: .25s;
  }
  .menu__item:hover {
    background-color: #CFD8DC;
  }
}
</style>