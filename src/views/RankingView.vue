<script setup>

import {RouterLink} from "vue-router";

</script>

<template>
  <div class="container">
    <h1 class="title">Ranking</h1>
    <ol id="ListPlayers">
      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">1</div>
          <div class="player-name">Nombre 0</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
        </div>
      </li>

      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">2</div>
          <div class="player-name">Nombre 1</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box victory"></div>
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
        </div>
      </li>

      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">3</div>
          <div class="player-name">Nombre 2</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
        </div>
      </li>

      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">4</div>
          <div class="player-name">Nombre 3</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box victory"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
          <div class="result-box victory"></div>
        </div>
      </li>

      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">5</div>
          <div class="player-name">Nombre 4</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box victory"></div>
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
        </div>
      </li>

      <li class="player-item">
        <RouterLink to="/stats">
        <div class="player-info">
          <div class="player-rank">6</div>
          <div class="player-name">Nombre 5</div>
        </div>
        </RouterLink>
        <div class="player-bar"></div>
        <div class="recent-results">
          <div class="result-box defeat"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
          <div class="result-box defeat"></div>
          <div class="result-box victory"></div>
        </div>
      </li>
    </ol>

    <div class="back-button">
      <RouterLink to="/home" class="router-link">
        <button class="red_button" id="back-button">Back</button>
      </RouterLink>
    </div>

  </div>


</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: 100%;
    margin: 0 20px; /* Establece un margen constante a ambos lados */
  }

  .player-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 30px auto;
    background-color: #FFFFCC;
    padding: 20px;
    border-radius: 5px;
  }

  .player-info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .player-rank {
    margin-right: 0;
    font-weight: bold;
    color: black;
  }

  .player-name {
    text-align: center;
    padding: 10px;
    color: black;
  }

  .recent-results {
    display: flex;
    justify-content: center;
  }

  .result-box {
    width: 30px;
    height: 30px;
    margin: 0 5px;
    border-radius: 4px;
  }

  #ListPlayers {
    list-style-type: none;
    padding: 10px;
  }

  .back-button {
    text-align: center;
    margin-top: 2rem; /* Ajusta el margen superior del botón */
    margin-bottom: 40px;
    order: -1;
    margin-left: auto;
  }

  .victory {
    background-color: #28A745;
  }

  .defeat {
    background-color: #DC3545;
  }

  @media (min-width: 768px) {
    .player-item {
      flex-direction: row;
      max-width: 100%; /* Ajusta el ancho máximo al 100% para pantallas más grandes */
    }

    .player-info {
      flex-direction: row;
      align-items: center;
      justify-content: space-evenly;
    }

    .player-rank {
      margin-bottom: 0;
      margin-right: 20px; /* Ajusta el margen derecho en pantallas más grandes */
      margin-left: 20px; /* Ajusta el margen izquierdo en pantallas más grandes */
    }

    .back-button {
      order: 0;
    }
  }
</style>



