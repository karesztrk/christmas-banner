<template>
  <div class="App">
    <section>
      <div class="box">
        <div class="circle">
          <Title />
        </div>
      </div>
      <Bubble v-for="bubble in state.bubbles" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Bubble from './components/Bubble.vue';
import Title from './components/Title.vue';
interface State {
  message: string;
}
export default defineComponent({
  components: {
    Bubble,
    Title,
  },
  setup() {
    const state = reactive({
      bubbles: 200,
    });
    return {
      state,
    };
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Satisfy&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Satisfy', cursive;
}

body {
  overflow: hidden;
}

.App section {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f1f1f1;
}

.App section .box {
  position: absolute;
  width: 450px;
  height: 450px;
}

.App section .box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, #000, transparent);
  opacity: 0.1;
  transform: rotate(45deg);
  transform-origin: left;
}

.App section .box .circle {
  position: relative;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #fff, #e4e3e8);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  z-index: 1;
}

.App section .box .circle::before {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  background: linear-gradient(315deg, #fff, #e4e3e8);
  border-radius: 50%;
}

.App section .box .circle h2 {
  position: absolute;
  z-index: 2;
  font-size: 4em;
  color: #ff2a2a;
  text-align: center;
}

.App section i {
  position: absolute;
  background: #000;
  border-radius: 100%;
  animation: bubbleAnimation linear infinite;
}

.App section i:nth-child(even) {
  background: transparent;
  border: 1px solid #ff2a2a;
}

@keyframes bubbleAnimation {
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  90% {
    opacity: 1;
  }
  100% {
    transform: translateY(-2000%);
    opacity: 0;
  }
}
</style>
