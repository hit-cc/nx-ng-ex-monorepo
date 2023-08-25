import * as mongoose from 'mongoose';
import { ModificationNote } from './../../../core/modules/common.module';

const schema = new mongoose.Schema({
  name: {
    type: {
      first_name: String,
      middle_name: String,
      last_name: String,
    },
    email: String,
    phone_number: String,
    gender: String,
    is_deleted: {
      type: Boolean,
      default: false,
    },
    modification_notes: [ModificationNote],
  },
});

export default mongoose.model('users', schema);
