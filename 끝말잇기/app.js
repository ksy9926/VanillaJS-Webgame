const number = parseInt(prompt("몇 명이 참가하나요?"));
alert(number);
const yesOrNo = confirm("맞나요?");

const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word;
let newWord;

const onClickButton = () => {
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;

    const order = parseInt($order.textContent);
    $order.textContent = (order % number) + 1;
  } else {
    alert("틀렸습니다!");
  }

  $input.value = "";
  $input.focus();
};

const onInput = (e) => {
  newWord = e.target.value;
};

$button.addEventListener("click", onClickButton);
$input.addEventListener("input", onInput);
