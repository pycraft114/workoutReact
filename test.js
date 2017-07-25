const year = new Date().getFullYear().toString(),
    month = (new Date().getMonth() + 1).toString(),
    day = new Date().getDay().toString();

const initialDate = year.concat("-", month, "-", day);

console.log(typeof initialDate);