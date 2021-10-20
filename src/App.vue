<template>
  <main>
    <h1>Входное тестовое</h1>
    <p>
      Входное тестовое нужно, чтобы мы понимали твой уровень JavaScript и Vue,
      умение работать с REST API.
    </p>
    <p>
      На проекте подключен Bootstrap, чтобы сэкономить ваше время на вёрстку.
    </p>
    <ul>
      <li>
        API документация:
        <a target="_blank" href="https://vue-study.skillbox.cc/"
          >https://vue-study.skillbox.cc/</a
        >
      </li>
      <li>
        Bootstrap:
        <a
          href="https://getbootstrap.com/docs/4.5/getting-started/introduction/"
          >https://getbootstrap.com/docs/4.5/getting-started/introduction/</a
        >
      </li>
      <li>
        Vue документация:
        <a href="https://vuejs.org/v2/guide/">https://vuejs.org/v2/guide/</a>
        <br />
        Вам понадобиться v-model, v-for, v-bind, computed свойства и рендер
        хуки.
      </li>
    </ul>

    <p>Что будет учитываться при оценке:</p>
    <ol>
      <li>Чистота кода.</li>
      <li>Компонентный подход.</li>
      <li>
        Внимательность. Где-то в постановке и текущей реализации могут быть
        допущены ошибки :-)
      </li>
      <li>Использование фич Vue.</li>
      <li>Использование ES6.</li>
    </ol>

    <div class="alert alert-secondary" role="alert">
      Вы получили вёрстку, которую надо интегрировать с бэком.
      <hr />
      Результат должен быть на платформе `codesandbox`.
      <br />
      Можете разрабатывать локально, но сюда потом перенести придётся. На других
      платформах задание проверяться не будет.
    </div>

    <section class="container mb-5">
      <h2>Первое задание</h2>
      <p>Нужно отправить форму Оформления заказа на сервер.</p>
      <p>
        /api/orders:
        <a
          target="_blank"
          href="https://vue-study.skillbox.cc/#/Orders/post_api_orders"
          >https://vue-study.skillbox.cc/#/Orders/post_api_orders</a
        >
      </p>
      <h3>Требования:</h3>
      <ol>
        <li>
          Сбор данных в форме должен быть реализован на Vue. На всякий случай
          уточняю :-)
        </li>
        <li>
          Обработка ошибок по полям. Ошибки будут приходить в ответе, если вдруг
          поля невалидные.
        </li>
      </ol>
      <h3>Уточнения</h3>
      <ol>
        <li>
          Чтобы полностью отправить форму, нужно перед этим запросить
          пользовательский ключ `/api/users/accessKey`.
        </li>
        <li>
          Форма до конца не отправиться с новым ключом, потому что тогда корзина
          будет пустая. Если вы дошли до этого — считайте что задание готово ;-)
        </li>
      </ol>
      <h4>Оценка менеджера</h4>
      <p>~20 минут. Если незнакомы с Vue — 40 минут.</p>

      <form action="" @submit.prevent="onSubmit">
        <div class="form-group">
          <label class="d-block">
            <div class="mb-2">Представьтесь</div>
            <input
              :class="{ 'is-invalid': errorForm.name }"
              v-model="dataForm.name"
              type=""
              class="form-control"
            />
            <div class="invalid-feedback">{{ errorForm.name }}</div>
          </label>
        </div>
        <div class="form-group">
          <label class="d-block">
            <div class="mb-2">Адрес доставки</div>
            <input
              :class="{ 'is-invalid': errorForm.address }"
              v-model="dataForm.address"
              type=""
              class="form-control"
            />
            <div class="invalid-feedback">{{ errorForm.address }}</div>
          </label>
        </div>
        <div class="form-group">
          <label class="d-block">
            <div class="mb-2">Телефон</div>
            <input
              :class="{ 'is-invalid': errorForm.phone }"
              v-model="dataForm.phone"
              type=""
              class="form-control"
            />
            <div class="invalid-feedback">{{ errorForm.phone }}</div>
          </label>
        </div>
        <div class="form-group">
          <label class="d-block">
            <div class="mb-2">Эл. почта</div>
            <input
              :class="{ 'is-invalid': errorForm.email }"
              v-model="dataForm.email"
              type=""
              class="form-control"
            />
            <div class="invalid-feedback">{{ errorForm.email }}</div>
          </label>
        </div>
        <div class="form-group">
          <label class="d-block">
            <div class="mb-2">Комментарий</div>
            <textarea
              v-model="dataForm.comment"
              class="form-control"
            ></textarea>
          </label>
        </div>
        <input type="submit" class="btn btn-primary" />
      </form>
    </section>

    <section class="container mb-5">
      <h2>Второе задание</h2>
      <p>
        Нужно доделать вывод товаров. Кто-то начал задачу, а вас попросили
        закончить начатое.
      </p>
      <p>Вывести товары нужно из категории с `id: 3`</p>
      <p>
        /api/products:
        <a
          target="_blank"
          href="https://vue-study.skillbox.cc/#/Products/get_api_products"
          >https://vue-study.skillbox.cc/#/Products/get_api_products</a
        >
      </p>
      <h3>Требования:</h3>
      <ol>
        <li>
          Товары должны выводиться из вычесляемого свойства `productsItems`.
        </li>
        <li>
          Формат данных продукта возвращаемого `productsItems` должен
          соответствовать типу `Product`.
        </li>
      </ol>
      <h4>Оценка менеджера</h4>
      <p>~10 минут. Если незнакомы с Vue — 20 минут.</p>
      <products-list></products-list>
      <h4>Дополнительное задание</h4>
      <p>
        Зарефакторить карточку товара используя БЭМ наименование. Это ещё займёт
        10 минут.
      </p>
      <div class="row">
        <div class="col-6">
          <div class="card">
            <img
              src="https://via.placeholder.com/200x200"
              class="card-img-top"
              alt="Название"
            />
            <div class="card__body card-body">
              <h5 class="card__body-title card-title">
                Детский трюковой самокат Razor Grom
              </h5>
              <h6
                class="card__body-subtitle card__body-subtitle_text-muted card-subtitle mb-2 text-muted"
              >
                4 990 ₽
              </h6>
              <a href="#" class="card__body-link card-link" style="color: blue"
                >Синий</a
              >
              <a href="#" class="card__body-link card-link" style="color: green"
                >Зелёный</a
              >
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="card">
            <img
              src="https://via.placeholder.com/200x200"
              class="card__img-top"
              alt="Название"
            />
            <div class="card__body card-body">
              <h5 class="card__body-title card-title">Детский самокат Razor</h5>
              <h6
                class="card__body-subtitle card__body-subtitle_text-muted card-subtitle mb-2 text-muted"
              >
                5 990 ₽
              </h6>
              <a href="#" class="card__body-link card-link" style="color: blue"
                >Синий</a
              >
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      dataForm: {
        name: "",
        address: "",
        phone: "",
        email: "",
        comment: "",
      },
      key: null,
      errorForm: {
        name: "",
        address: "",
        phone: "",
        email: "",
      },
    };
  },

  methods: {
    onSubmit() {
      let errorForm = null;
      this.errorForm = {};
      axios
        .get("https://vue-study.skillbox.cc/api/users/accessKey")
        .then((response) => {
          this.key = response.accessKey;
        })
        .then(() => {
          axios
            .post("https://vue-study.skillbox.cc/api/orders", this.dataForm, {
              params: {
                accessKey: this.key,
              },
            })
            .catch(function (error) {
              if (error.response) {
                console.log(error.response.data.error.request);
                errorForm = error.response.data.error.request;
              }
            })
            .then((response) => {
              console.log(response);
              this.errorForm = errorForm;
            });
        });
    },
  },
  components: {},
};
</script>
