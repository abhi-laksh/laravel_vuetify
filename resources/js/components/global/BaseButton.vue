<template>
        <button v-bind:class="['button', bclass]" v-bind:type="btype">
            <slot>Button</slot>
        </button>
</template>
<script>
export default {
    props: {
        btype: {
            type: String,
            default: "button"
        },
        bclass: {
            type: [Array, String, Object],
            default:""
        }
    }
};
</script>
