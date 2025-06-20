import { ref } from 'vue';

export function useToggle(initialValue:boolean = false){
    const state = ref(initialValue);
    const toggle = () => {
        state.value = !state.value
    };
    return {
        state,
        toggle
    }
}