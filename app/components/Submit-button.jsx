'use client'
 
import { useFormStatus } from 'react-dom'
 
export function SubmitButton({name}) {
  const { pending } = useFormStatus()
console.log(name)
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'traitement...' : name } 
    </button>
  )
}