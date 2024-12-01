function fetchData(url: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if(!url){
      reject("Fetch Error: URL is required");
    }else{
      resolve(`Data from ${url}`);
    }
  })
}

function processData(data: string): Promise<string> {
  return new Promise((resolve, reject) => {
    if(!data){
      reject("Process Error: Data is required");
    }else{
      resolve(data.toUpperCase());
    }
  })
}

(async () => {
  try {
    const fetchAPI = await fetchData("https://example.com");
    const process = await processData(fetchAPI)
    console.log("Processed Data: ", process)
  } catch(err){
    console.error(err)
  }

})()