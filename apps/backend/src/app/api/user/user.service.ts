import { IUser } from './user.interface';
import users from './user.schema';

class UserService {
  public _createUser = async (user_params: IUser) => {
    // eslint-disable-next-line no-useless-catch
    const newUser = new users(user_params);
    const data = await newUser.save();
    return data;
  };

  public _getUserList = async () => {
    return users.find();
  };

  public _updateUser = async (user_params: IUser) => {
    console.log('user_params', user_params);
    const query = { _id: user_params._id };
    const data = users.findOneAndUpdate(query, user_params);
    console.log('data', data);
    return data;
  };

  public _deleteUser = async (_id: string) => {
    return new Promise((resolve, reject) => {
      const query = { _id: _id };
      const data = users.deleteOne(query);
      resolve(data);
    });
  };
}

export default UserService;
