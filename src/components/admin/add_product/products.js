import {db, fb} from '../../../config/firebaseConfig';

export default {
  name: 'products',
  components: {},
  props: [],
  data () {
    return {
      products: [],
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
      this.$firestore.product.add({
        name: this.product_name,
        price: this.product_price
      })
    },
    firestore () {
      return {
        products: fb.collection('products'),
      }
    }
  },
  created() {
    db.collection("products").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.products.push(doc.data());
      });
    });
  }
}
