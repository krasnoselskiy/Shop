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
      },
      productImages: null,
      isShowEditDialog: false,
      editedProductId: null,
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
    watcher() {
      db.collection("products").onSnapshot((querySnapshot) => {
        this.products = [];
        querySnapshot.forEach((doc) => {
          this.products.push(doc);
        });
      });
    },
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
      db.collection("products").doc(id).delete().then(() =>  {
        this.products = [];
        this.readData();
      }).catch(function(error) {
        console.error("Error removing document: ", error);
      });
    },
    editProduct(product) {
      this.isShowEditDialog = true;
      this.editedProductId = product.id;
      this.product = product.data();
    },
    updateProduct() {
      db.collection("products").doc(this.editedProductId).update(this.product)
      .then(() => {
        this.watcher();
        this.clearForm();
      })
      .catch((error) => {
          console.error("Error updating document: ", error);
      });
    }
    // firestore () {
    //   return {
    //     products: fb.collection('products'),
    //   }
    // }
  },
  created() {
    this.readData();
  }
}
