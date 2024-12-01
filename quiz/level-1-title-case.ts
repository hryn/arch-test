function titleCase(title: string): string {
  return title.toLowerCase()
              .split(" ")
              .map(str => str.charAt(0).toUpperCase() + str.slice(1))
              .join(" ")
}

const movieA = "I'm a little tea pot";
const movieB = "sHoRt AnD sToUt";

console.log(titleCase(movieA))
console.log(titleCase(movieB))