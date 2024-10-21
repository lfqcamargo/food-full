import { Entity } from "@/core/entities/entity"
import { Optional } from "@/core/types/optional"

export interface UserProps {
  username: string
  password: string
  role: number
  createdAt: Date
  lastLogin?: Date | null
  active: boolean
}

export class User extends Entity<UserProps> {
  get username() {
    return this.props.username
  }

  get password() {
    return this.props.password
  }

  get role() {
    return this.props.role
  }

  get createdAt() {
    return this.props.createdAt
  }

  get lastLogin() {
    if (this.props.lastLogin) {
      return this.props.lastLogin
    } else {
      return null
    }
  }

  get active() {
    return this.props.active
  }

  set username(username: string) {
    this.props.username = username
  }

  set password(password: string) {
    this.props.password = password
  }

  set role(role: number) {
    this.props.role = role
  }

  set lastLogin(lastLogin: Date | null) {
    this.props.lastLogin = lastLogin
  }

  set active(active: boolean) {
    this.props.active = active
  }

  static create(props: Optional<UserProps, 'createdAt'>, id?: number) {
    const user = new User(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
      }, id)

    return user
  }
}
