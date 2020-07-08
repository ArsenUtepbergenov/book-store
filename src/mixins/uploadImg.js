import { storage } from '../firebase/firebase'

const mixinUploadImg = {
  methods: {
    uploadImg (fileName, img) {
      const storageRef = storage.ref()
      const imgRef = storageRef.child('img/' + fileName).put(img)
      const that = this

      imgRef.on('state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          this.$refs.progressImg.value = progress
        },
        error => {
          console.error('Error upload img for new book: ', error)
        },
        async () => {
          that.imgUrl = await imgRef.snapshot.ref.getDownloadURL()
          console.log('File available at', that.imgUrl)
        }
      )
    }
  }
}

export default mixinUploadImg
