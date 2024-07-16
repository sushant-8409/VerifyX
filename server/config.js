// export default {
//   JWT_SECRET : "62ax9KckM4uzKgcJ6vaf5HZjEDkurwwBGfpxjvOivmw=",
//   // EMAIL: "colby67@ethereal.email", // testing email & password
//   // PASSWORD : "VUcVenHWUbXdzQjd3Z",   

//   EMAIL: "sushantkumarsingh8409@gmail.com",
//   PASSWORD : "ijoe kxcw ylzo zmam",
//   // ATLAS_URI: "mongodb+srv://admin:admin8409@cluster0.nd9tyo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//   // ATLAS_URI: "mongodb+srv://admin:admin8409@cluster0.nd9tyo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
//  ATLAS_URI : "mongodb+srv://admin:admin8409@cluster0.nd9tyo4.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
// }

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  ATLAS_URI: process.env.ATLAS_URI
}
