import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from '@tanstack/react-query'
import { Helmet } from 'react-helmet-async'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

import { useConstantContext } from '../../context/ConstantContext'

const loginForm = z.object({
  username: z.string(),
  password: z.string(),
})

type LoginForm = z.infer<typeof loginForm>

export function Login() {
  const { name } = useConstantContext()

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: login,
  })

  const {
    register,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginForm),
  })

  async function handleLogin(data: LoginForm) {
    try {
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  let activeButton = false
  const usernameWatch = watch('username')
  const passwordWatch = watch('password')

  if (!usernameWatch || !passwordWatch) {
    activeButton = false
  } else {
    activeButton = true
  }

  return (
    <>
      <Helmet title={name} />

      <div className="flex min-h-screen flex-1 items-center justify-center">
        <div
          className="container relative min-h-screen bg-cover bg-center"
          style={{
            backgroundImage: "url('/home-mobile.jpg')",
          }}
        ></div>
        <Card className="absolute w-5/6 p-4">
          <form
            onSubmit={handleSubmit(handleLogin)}
            className="flex flex-col gap-6"
          >
            <div>
              <Label htmlFor="username">Usuário</Label>
              <Input
                type="text"
                id="username"
                placeholder="Usuário..."
                {...register('username')}
              />
            </div>

            <div className="w-full">
              <Label htmlFor="password">Senha</Label>
              <Input
                type="password"
                id="password"
                placeholder="Senha..."
                {...register('password')}
              />
              <div className="mt-4 flex w-full justify-end">
                <Button
                  className="w-28"
                  disabled={isSubmitting || !activeButton}
                >
                  Entrar
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  )
}
