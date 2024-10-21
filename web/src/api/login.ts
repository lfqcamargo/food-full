import { api } from '@/lib/axios'

interface LoginBody {
  username: string
  password: string
}

export async function login({ username, password }: LoginBody) {
  await api.post('/login', { username, password })
}
