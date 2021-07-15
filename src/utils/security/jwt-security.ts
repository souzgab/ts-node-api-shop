import jwt, { JwtPayload } from 'jsonwebtoken'
import moment from 'moment'
import { User } from '../../models/bussiness/user.model'
import { Role } from '../../models/enum/user.enum'
import userService from '../../services/user.service'

const secret = process.env.SECRET_KEY

export interface JWT {
  user: User
  token: string
}

export const generateJwt = (params = {}) => {
  return jwt.sign(params, secret ? secret : 'secret', {
    expiresIn: '1d'
  })
}

export const validateJwtProduct = async (token: string) => {
  const idUser = jwt.decode(token.split('Bearer')[1].replace(" ", "")) as JwtPayload
  if (idUser) {
    console.log((Date.now() * 1000))
    const user = await userService.findById(idUser.id)
    if(!(user?.role === Role.ADMIN)) throw "Usuário não é um administrador!"
    if (user && (moment(user.updatedAt).diff(new Date(), 'hours') > 12) && !(user.role === Role.ADMIN)) {
      throw `Usuário não autenticado, faça logon novamente como admin!`
    }
  }
}

export const validateJwtAll = async (token: string ) => {
  const idUser = jwt.decode(token.split('Bearer')[1].replace(" ", "")) as JwtPayload
  if (!idUser) throw "Não Autenticado!"
  const user = await userService.findById(idUser.id)
  if ((user && idUser.exp) && (Date.now() >= idUser.exp * 1000)) throw "Não Autenticado, sessão expirada"
}
