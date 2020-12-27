<script lang="tsx">
import { defineComponent, reactive } from 'vue';
interface State {
  name: string;
}
export default defineComponent({
  name: 'Title',
  setup() {
    const state = reactive<State>({});
    return () => (
      <h2>
        Happy <br /> Christmas
      </h2>
    );
  },
});
</script>

<style lang="css"></style>
