<script lang="tsx">
import { defineComponent, reactive } from 'vue';
interface State {
  name: string;
}
export default defineComponent({
  name: 'Bubble',
  setup() {
    const state = reactive<State>({});
    return () => {
      const x = Math.floor(Math.random() * window.innerWidth);
      const y = Math.floor(Math.random() * window.innerHeight);

      const size = Math.random() * 10;
      return (
        <i
          style={{
            left: `${x}px`,
            top: `${y}px`,
            height: `${1 + size}px`,
            width: `${1 + size}px`,
            animationDuration: `${10 + size}s`,
            animationDelay: `-${size}s`,
          }}
        />
      );
    };
  },
});
</script>

<style lang="css"></style>
