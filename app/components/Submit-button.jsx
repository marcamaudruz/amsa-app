'use client'
 
import {Button} from '@nextui-org/button'; 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({name}) {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending}>
      {pending ? 'traitement...' : name } 
    </Button>
  )
}