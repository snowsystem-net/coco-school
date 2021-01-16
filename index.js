const init = () => {
  makeQuestion();
  resultClear();
}

const resultClear = () => {
  document.querySelector('.result_OK').style.display = 'none';
  document.querySelector('.result_NG').style.display = 'none';
}


// 問題作成
const makeQuestion = () => {
  const cherry1 = document.querySelector('#cherry1');
  cherry1.innerHTML = Math.floor(Math.random() * 10);
}

// 判定
const judge = (e) => {

  const cherry1 = document.querySelector('#cherry1').innerHTML;
  const num1 = parseInt(cherry1);
  const num2 = parseInt(e.innerHTML);

  console.log(num1, num2);

  if (num1 + num2 == 10) {
    document.querySelector('.result_OK').style.display = 'block';
  } else {
    document.querySelector('.result_NG').style.display = 'block';
  }
}


init();