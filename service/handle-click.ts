const handleCopyLink = () => {
  console.log("clicked copy link")

  const copyText = "fandika"
  navigator.clipboard.writeText(copyText)
}

const handleSaveImage = () => {
  console.log("clicked save image")

  const image = document.getElementById("image") as HTMLImageElement
  const canvas = document.createElement("canvas")
  canvas.width = image.width
  canvas.height = image.height
  const ctx = canvas.getContext("2d")
  ctx?.drawImage(image, 0, 0)
  const dataURL = canvas.toDataURL("image/png")

  const a = document.createElement("a")
  a.href = dataURL
  //   a.href = "https://images.tiketnft.com/images/upload-image/74371/175961-2.png"
  a.download = "fandika.png"
  a.click()
}

export { handleCopyLink, handleSaveImage }
