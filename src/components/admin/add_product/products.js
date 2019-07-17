import { db, fb} from '../../../config/firebaseConfig';

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
  firestore () {
    return {
      products: db.collection('products'),
    }
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
      this.$firestore.products.add(this.product);
    },
    clearForm() {
      Object.assign(this.$data, this.$options.data.apply(this))
    },
    deleteProduct(doc) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.value) {
          this.$firestore.products.doc(doc['id']).delete()

          Toast.fire({
            type: 'warning',
            title: 'Your file has been deleted.'
          });
        }
      })
    },
    editProduct(product) {
      this.isShowEditDialog = true;
      this.editedProductId = product['id'];
      this.product = product;
    },
    updateProduct() {
      this.$firestore.products.doc(this.editedProductId).update(this.product);

      Toast.fire({
        type: 'success',
        title: 'Your product has been updated!'
      });

      this.isShowEditDialog = false;
    }
  },
  created() {
  }
}
