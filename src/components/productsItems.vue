<template>
  <div class="row">
    <div class="col-6" v-for="(item, i) in productsItems" :key="i">
      <div class="card">
        <img
          :src="item.image.file.url"
          class="card-img-top img-fluid"
          alt="Название"
        />
        <div class="card__body card-body">
          <h5 class="card__body-title card-title">
            {{ item.title }}
          </h5>
          <h6
            class="card__body-subtitle card__body-subtitle_text-muted card-subtitle mb-2 text-muted"
          >
            {{ item.price }}
          </h6>
          <a
            href="#"
            class="card__body-link card-link"
            v-for="(value, k) in item.colors"
            :key="k"
            :style="{ color: value.code }"
            >{{ value.title }}</a
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "productsItem",

  data() {
    return {
      products: null,
    };
  },

  computed: {
    /**
     * Объект продукта
     * @typedef {Object} Product
     * @property {number} id айди
     * @property {string} title заголовок
     * @property {string} [image] ссылка на картинку
     * @property {Array <Object>} [colors] возможные цвета
     * @returns {Array <Product> | null}
     */

    productsItems() {
      return this.products;
    },
  },
  mounted() {
    /**
     * Метод для получение товаров из категории
     * @todo Реализовать получение товаров
     * @param {string | number} categoryId id/slug категории
     */
    axios
      .get("https://vue-study.skillbox.cc/api/products", {
        params: {
          categoryId: 3,
        },
      })
      .then((response) => {
        let result = response.data;
        console.log(result);
        this.products = result.items;
      });
  },
};
</script>


