import { writeFile } from 'fs/promises'
import { join } from 'path'
import { redirect } from "next/navigation";


export default function ServerUploadPage() {
  async function upload(FormData) {
    'use server'

    const data = Object.fromEntries(FormData);
    console.log(data)
    const file = FormData.get('file')
    if (!file) {
      throw new Error('No file uploaded')
    }
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    // With the file data in the buffer, you can do whatever you want with it.
    // For this, we'll just write it to the filesystem in a new location
    const path = join('./public', 'tmp', file.name)
    console.log(path)
    await writeFile(path, buffer)
    console.log(`open ${path} to see the uploaded file`)
    redirect("/");
  }

  return (
    <main>
      <h1>React Server Component: Upload</h1>
      <form action={upload}>
        <input type="file" name="file" />
        <input type="submit" value="Upload" />
      </form>
    </main>
  )
}