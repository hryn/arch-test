function delay(ms: number): Promise<string> {
  return new Promise( resolve => setTimeout(resolve, ms))
}

function alert(str: string): void {
  console.log(str)
}

delay(3000).then(() => alert('runs after 3 seconds'));