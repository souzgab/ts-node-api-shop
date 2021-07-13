import jwt, { JwtPayload } from 'jsonwebtoken'
import moment from 'moment'
import ObjectID from 'mongodb'
import { User } from '../../models/bussiness/user.model'
import { Role } from '../../models/enum/user.enum'
import userRepository from '../../models/repository/user.repository'

const secret = process.env.SECRET_KEY

export interface JWT {
  user: User
  token: string
}

export const generateJwt = (params = {}) => {
    try {
      return jwt.sign(params, secret ? secret : 'secret', {
        expiresIn: '1d'
      })
    } catch (error) {
      throw new Error(`Error: ${error}, Problemas ao gerar JWT`)
    }
}

export const validateJwt = async (token: string) => {
    try {
      const idUser = jwt.decode(token.split('Bearer')[1].replace(" ", "")) as JwtPayload
      if (idUser) {
        const user = await userRepository.findById(idUser.id)
        console.log(moment(user?.updatedAt).diff(new Date(), 'hours'))
        if (user && (moment(user.updatedAt).diff(new Date(), 'hours') > 12) && !(user.role === Role.ADMIN)) {
          throw new Error(`Error: Usuário não autenticado, faça logon novamente como admin!`)
        }
      }
    } catch (error) {
      throw new Error(`Error validate jwt`)
    }
}