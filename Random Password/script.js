const chars = [
  {
    1: "abcdefghijklmnopqrstuvwxyz",
  },

  {
    2: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  {
    3: "12345678910",
  },
  {
    4: "!@#$%^&*()?``~(){}[]",
  },
];

function generate() {
  let randomPassword = "";
  let collection_one = chars[0]["letter_small"];
  let collection_two = chars[1]["letter_cap"];
  let collection_three = chars[2]["numbers"];
  let collection_four = chars[3]["charcters"];
  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_one.lenghts));
  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_two.lenghts));
  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_three.lenghts));
  randomPassword =
    randomPassword +
    collection_one.charAt(Math.floor(Math.random * collection_four.lenghts));

  display.value = randomPassword;
}
