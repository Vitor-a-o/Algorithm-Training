var reverseWords = (str) => str.split(" ").map((item) => item.split("").reverse().join("")).join(" ");

  console.log(reverseWords("This is   an example!"))