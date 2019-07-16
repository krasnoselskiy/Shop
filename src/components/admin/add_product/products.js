import {db} from '../../../config/firebaseConfig';

export default {
  name: 'products',
  components: {},
  props: [],
  data () {
    return {
      products: [],
      product: {
        name: null,
        price: null,
        image: null
      }
      // product_name: null,
      // product_price: null,
      // product_image: null,
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    readData() {
      db.collection("products").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
    },
    add_product () {
      db.collection("products").add(this.product)
        .then((docref) => {
          this.readData();
          this.clearForm();
        }).catch((err) => {
          console.log(err);
        });
      // this.$firestore.product.add({
      //   name: this.product_name,
      //   price: this.product_price,
      //   image: this.product_image,
      // })
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    deleteProduct(id) {
      if(confirm('Are you sure?')) {
        db.collection("products").doc(id).delete().then(function() {
          console.log("Document successfully deleted!");
        }).catch(function(error) {
            console.error("Error removing document: ", error);
        });
      } else {

      }
    },
    editProduct(id) {
      alert(id);
    },
    firestore () {
      return {
        products: fb.collection('products'),
      }
    }
  },
  created() {
    this.readData();
  }
}
