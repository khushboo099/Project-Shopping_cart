const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
        fname: {
          type: String,
          required: true,
          trim: true
        },
        lname: {
          type: String,
          required: true,
          trim: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true
          },
        profileImage:{
              type: String,
              required: true
          },
        phone: {
          type: Number,
          required: true,
          unique: true,
          minlength: 10,
          maxlength: 10,
          trim: true
        },
        password: {
          type: String,
          required: true,
          trim: true
        },
        address: {
          shipping:{
          street: { type: String , required: true},
          city: { type: String, required: true },
          pincode: { type: Number, required: true },
          },
          billing: {
            street: {type: String, required: true},
            city: {type: String, required: true},
            pincode: {type: Number, required: true}
          }
        },
      }, { timestamps: true });

module.exports = mongoose.model('User', userSchema)




// { 
//     fname: {string, mandatory},
//     lname: {string, mandatory},
//     email: {string, mandatory, valid email, unique},
//     profileImage: {string, mandatory}, // s3 link
//     phone: {string, mandatory, unique, valid Indian mobile number}, 
//     password: {string, mandatory, minLen 8, maxLen 15}, // encrypted password
//     address: {
//       shipping: {
//         street: {string, mandatory},
//         city: {string, mandatory},
//         pincode: {number, mandatory}
//       },
//       billing: {
//         street: {string, mandatory},
//         city: {string, mandatory},
//         pincode: {number, mandatory}
//       }
//     },
//     createdAt: {timestamp},
//     updatedAt: {timestamp}
//   }

