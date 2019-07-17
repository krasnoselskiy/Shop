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
      productImage: null,
      isShowEditDialog: false,
      editedProductId: null,
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

    },

    readData() {

    },

    add_product() {
      this.$firestore.products.add(this.product);
      // this.addImage();
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

    addImage() {
      let product_image = this.productImage.target.files[0];
      let storageRef = fb.storage().ref('products/' + product_image.name);

      var uploadTask = storageRef.put(product_image);

      uploadTask.on('state_changed', (snapshot) => {
      }, function(error) {
        console.log(error);
      }, () => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          this.product.image = downloadURL;
          console.log('File available at', downloadURL);
        });
      });

      storageRef.put(product_image).then((snapshot) => {
        Toast.fire({
          type: 'success',
          title: 'Files has been uploaded!'
        });
      });
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
      this.product = {};
    }
  },

  created() {
  }
}
