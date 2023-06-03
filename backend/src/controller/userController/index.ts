import { UserLoginParams } from "./types"

export const login = async function(userLoginInfo: UserLoginParams) {
  console.log("userLoginInfo", userLoginInfo)
  return new Promise((resolve) => {
    setTimeout(() => {
      // 
      const user = null
      resolve(user)
    }, 2000)
  })
}