import {db, fb} from '../../../config/firebaseConfig';

export default {
  name: 'products',
  components: {},
  props: [],
  data () {
    return {
      product_name: null,
      product_price: null,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    add_product () {
      db.collection("products").doc(this.product_name).set({
        name: this.product_name,
        price: this.product_price,
      })
      .then(function() {
        this.product_name = this.product_price = '';
      })
      .catch(function(error) {
          // console.error("Error writing document: ", error);
      });
    }
  }
}
