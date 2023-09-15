export const processParams = (url) => {
  let processedParams = ''
  if(url.length >= 1 ){
    //concatenates array of params into url
    url.forEach(param => {
      processedParams = processedParams.concat('/' + param);
    });
  }
  //if not subpage - add leading /
   else {
    processedParams = '/' + params
  }
  console.log('Porcessed Param, ',processedParams)
  return processedParams;
}
