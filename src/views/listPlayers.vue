<script setup>

import {RouterLink} from "vue-router";
import '../assets/listPlayers.css'
</script>
<template>
<div class="container">
<h1 class="title">Best Players</h1>
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
</div>
</template>



