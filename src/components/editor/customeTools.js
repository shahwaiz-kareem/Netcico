import ImageTool from "@editorjs/image";
class customeImageTool extends ImageTool {
  async removed() {
    const imageData = this.data;
    const imageUrl = imageData.file.url;
    console.log(imageUrl);
    try {
      if (imageUrl === undefined) return "url not found!";
      const request = await fetch("/api/upload/delete", {
        method: "Delete",
        body: JSON.stringify({ url: imageUrl })
      })
      const responce = await request.json()
      console.log(responce);
    } catch (error) {
      console.log(error.message);
    }
  }
}

export default customeImageTool;
