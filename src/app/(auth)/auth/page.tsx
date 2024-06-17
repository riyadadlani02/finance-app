"use client"
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useToast } from '@/components/ui/use-toast'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

import { createCookie } from '@/cookies'
function Auth() {
  const router = useRouter()
  const [name, setName] = useState<string | null>(null)
  const { toast } = useToast()
  const handleSignUp = () => {
    if (!name) return toast({
      title: "Erro entering the application",
      description: "Please insert your name to enter the application",
      variant: "destructive",
    })
    createCookie(name)
    sessionStorage.setItem("name", name)
    router.push("/dashboard")
  }
  return (
    <div className="flex items-center justify-center h-screen w-screen ">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Enter the app</CardTitle>
          <CardDescription>Insert your name to enter the app</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" onChange={(e) => setName(e.target.value)} />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">

          <Button onClick={() => handleSignUp()}>Continue</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Auth