'use strict';

{
    // ボタンがクリックされたときの処理
document.querySelector('#btn3').addEventListener('click', (event) => {
    document.querySelector('#inp3').showPicker();
  }, false);
   
  // 日付が選択されたときの処理
  document.querySelector('#inp3').addEventListener('change', (event) => {
    document.querySelector('#out3').value = event.target.value;
  }, false);

}