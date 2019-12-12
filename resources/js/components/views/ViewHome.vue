 <template>
    <div class="container">
        <div class="row">
            <div
                class="co-md-4 product-box"
                v-for="(product, index) in products"
                v-bind:key="index"
            >
                <router-link v-bind:to="{ path: 'products/' + product.id }">
                    <img v-bind:src="product.image" v-bind:alt="product.name" />
                    <h5>
                        <span v-html="product.name"></span>
                        <span>$ {{ product.price }}</span>
                    </h5>
                    <!-- <p class="bg-grad-45-sp button">Buy Now</p> -->
                    <base-button class="bg-grad-45-sp text-white"
                        >Buy Now</base-button
                    >
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: []
        };
    },
    mounted() {
        axios
            .get("api/products/")
            .then(response => (this.products = response.data));
    }
};
</script>
