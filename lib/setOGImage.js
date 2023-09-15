const setOGImage = (page, branding) => {
  if(!page){
    return null
  }
  if(!page.OGImage){
    return 'https://via.placeholder.com/200x150'
  }
  else {
    return process.env.NEXT_PUBLIC_IMAGE_URL + page.OGImage.url;
  }
}

export default setOGImage;
