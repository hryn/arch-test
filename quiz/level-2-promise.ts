function delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms))
}

function alert(str: string) {
  console.log(str)
}

delay(3000).then(() => alert('runs after 3 seconds'));