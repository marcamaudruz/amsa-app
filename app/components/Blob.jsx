import { put } from "@vercel/blob";
import { revalidatePath } from "next/cache";

export async function Blob() {
  async function uploadImage(formData) {
    "use server";
    const imageFile = formData.get("image");
    const blob = await put(imageFile.name, imageFile, {
      access: "public",
    });
    revalidatePath("/");
    console.log("Response: " + blob.pathname);
    console.log("Response: " + blob.url);

    return blob;
  }
  return (
    <div>
      <form action={uploadImage}>
        <label htmlFor="image">Image</label>
        <input type="file" id="image" name="image" required />
        <button>Upload</button>
      </form>
    </div>
  );
}
