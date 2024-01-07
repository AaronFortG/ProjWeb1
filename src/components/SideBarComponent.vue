<script setup>

</script>

<template>

  <div className="sidebar">
    <div className="item">
      <img class="icon" src="/icon1" />
      <div className="text">The App</div>
    </div>

    <hr />
    <div className="item">
      <img class="icon" src="/icon2" />
      <div className="text">Dashboard</div>
    </div>
    <div className="item">
      <img class="icon" src="/icon3" />
      <div className="text">Search</div>
    </div>

    <div className="item">
      <img class="icon" src="/icon4" />
      <div className="text">Insights</div>
    </div>

    <div className="item">
      <img class="icon" src="/icon4" />
      <div className="text">Docs</div>
    </div>

    <div className="item">
      <img class="icon" src="/icon5" />
      <div className="text">Settings</div>
    </div>
  </div>
</template>

<style scoped>
.sidebar{
  width: 60px;
  height:  100%;
  box-sizing: border-box;
  padding: 10px;
  background-color: #ffffff;
  transition: ease-in-out 0.3s;
  overflow: hidden;
}

.sidebar:hover {
  width: 200px;
}

.sidebar:hover > .item > .text {
  opacity: 1;
}

hr {
  height: 1px;
  color: #919191;
  margin: 15px 0;
}

.item {
  display: flex;
  align-items: center;
  margin: 20px 0;
}

.item .icon {
  width: 40px;
  height: 35px;
  flex-shrink: 0;
  fill: #424242;
}

.item .text {
  opacity: 0;
  transition: ease-in-out 0.3s;
  transition-delay: .2s;
  margin-left: 15px;
  write-space: nowrap;
}
</style>