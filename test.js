const mongoose = require('mongoose');
const Schema = mongoose.Schema; //mongoose sayesinde veritabanında ilgili dokümanları oluşturaibliriz

//connect DB
mongoose.connect('mongodb://localhost/pcat-test-db');

//create schema
const PhotoSchema = new Schema({
  title: String,
  description: String,
});
const MetinSchema = new Schema({
  name: String,
  surname: String,
});
const Photo = mongoose.model('Photo', PhotoSchema); // burdaki "photo", photo adıyla bi collection oluşşturuor
const Metin = mongoose.model('Metin', MetinSchema);
//create a photo
Photo.create({
  title: 'sdfgsd photo title',
  description: 'Photssdo lorem ipsum',
});
Metin.create({
  name: 'esin',
  surname: 'yaldız',
});

////////////////////////////////////////////photo okuma

// Photo.find({},(err,data)=>{
//     console.log(data);
// })

////////////////////////////update photo

// const id = '63bfd204c3c8208426c1e4ed';
// Photo.findOneAndUpdate(
//   id,
//   {
//     title: 'Deneme photo title updated',
//     description: 'update desc',
//   },
//   {
//     new: true,//değişikliği consoleda da görmek için
//   },
//   (err, data) => {
//     console.log(data);
//   }
// );

///////////////delete a photo

// const id = '63bfd204c3c8208426c1e4ed';
// Photo.findByIdAndDelete(id,(err,data)=>{
//     console.log('photo is removed');
// })
