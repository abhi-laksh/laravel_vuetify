<template>
    <v-app>
        <div class="container">
            <div class="row">
                <div class="text-center">
                    <!-- Must be inside v-app to show inbuilt colors -->
                    <v-btn rounded color="primary" dark>Rounded Button</v-btn>
                    <v-btn rounded color="primary" class="button mt-5"
                        >Rounded</v-btn
                    >
                </div>
                <v-carousel>
                    <v-carousel-item
                        v-for="(item, i) in items"
                        :key="i"
                        :src="item.src"
                        reverse-transition="fade-transition"
                        transition="fade-transition"
                    ></v-carousel-item>
                </v-carousel>
            </div>
        </div>
    </v-app>
</template>
<script>
export default {
    name: "vuetify-btn",
    data() {
        return {
            items: [
                {
                    src:
                        "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                }
            ]
        };
    }
};
</script>
