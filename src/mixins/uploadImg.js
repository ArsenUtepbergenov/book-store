import { storage } from '../firebase'

const mixinUploadImg = {
  methods: {
    uploadImg(context) {
      const { updatedBook, imgFile } = context
      const storageRef = storage.ref()
      const imgRef = storageRef.child('img/' + updatedBook.imgFileName).put(imgFile)

      imgRef.on(
        'state_changed',
        snapshot => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          context.$refs.progressImg.value = progress
        },
        error => {
          console.error('Error upload img for new book: ', error)
        },
        async () => {
          context.imgUrl = await imgRef.snapshot.ref.getDownloadURL()
          console.log('File available at', context.imgUrl)
        },
      )
    },
  },
}

export default mixinUploadImg
