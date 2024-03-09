<script >
import Lesson from './components/Lesson.vue'
import Checkout from './components/Checkout.vue'
export default {
  name: 'App',
  data() {
    return {
      currentView: Lesson,
      apiUrl:
        "https://cst3145-env.eba-gya9ecbn.eu-west-2.elasticbeanstalk.com/lessons",
      colArys: [],
      search: "",
      showCheckOut: false,
      cart: [],
      sort: "",
      sortCategory: "title",
      isProduct: true,
      nme: "",
      ph: "",
    }
  },
  components: {
    Lesson,
    Checkout
  },
  created: function () {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("service-worker.js");
    }
    let webstore = this;
    fetch(
      this.serverURL
    ).then(function (response) {
      response.json().then(function (json) {
        webstore.colAry