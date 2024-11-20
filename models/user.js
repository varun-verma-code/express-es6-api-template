import mongoose, { mongo } from 'mongoose';

const Schema = mongoose.Schema;

const UserSchema = Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  date_of_birth: {
    type: Date,
  },
});

UserSchema.virtual('name').get(function () {
  let fullName = '';
  if (this.first_name && this.last_name) {
    fullName = `${this.first_name}, ${this.last_name}`;
  }
  return fullName;
});

const User = mongoose.model('User', UserSchema);

export { User };
