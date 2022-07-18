import User from '../models/user.js'

export async function getUsers(){
    const userList = await User
      .find()
    
      return userList
}

export async function getOneUser(email){
  const oneUser = await User
    .findOne({email: email})

    return oneUser
}

export async function createUser(userData){
    
    const User = new User(userData)   
    const result = await User.save()
    
    return result
}

export async function updateUser(email, body) {
  return await User.findOneAndUpdate({email: email}, {...body})
}