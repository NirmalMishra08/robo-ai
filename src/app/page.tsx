"use client"
import React from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { authClient } from '@/lib/auth-client'

const Page = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')

  const { data: session } = authClient.useSession();

  const onSubmit = async () => {
    try {
      await authClient.signUp.email({
        email,
        name,
        password,

      }, {
        onError: (error) => {
          alert("Something went wrong while creating user")
          // Optionally show an error message
        },
        onSuccess: (data) => {
          alert('User created successfully:')
          // Optionally redirect or show a success message
        },

      })

    } catch (error) {
      console.error('Error creating user:', error)
    }
  }

  if (session) {
    return (<><div className='p-4'>You are already logged in as {session.user.name}</div>
      <Button onClick={() => authClient.signOut()}>
        Sign Out
      </Button> </>)
  }

  return (
    <div className='p-4 flex flex-col gap-2'>
      <Input placeholder='name' value={name} onChange={(e) => setName(e.target.value)} />
      <Input placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input type='password' placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button onClick={onSubmit}>
        Create User
      </Button>
    </div>
  )
}

export default Page