'use strict';

{
  // body要素を取得
  const body = document.getElementsByTagName('body')[0];
  console.log(body);
  // Modal Openボタンを取得
  const btn = document.querySelectorAll('.btn__link');
  console.log(btn);
  // モーダルの背景を取得
  const modalBack = document.querySelector('.modal-back');
  console.log(modalBack);
  // モーダルを取得
  const modal = document.querySelectorAll('.modal');
  console.log(modal);
  // ✕ボタンを取得
  const closeBtn = document.querySelector('.close');
  console.log(closeBtn);

  // イベントを付加
  // モーダルを表示
  for (let i = 0; i < btn.length; i++) {
    // ボタンをクリック
    function addOpen(e) {
      e.preventDefault();
      body.classList.add('open');
      modalBack.classList.add('open');
      modal[i].classList.add('open');
    }
    btn[i].addEventListener('click', addOpen);
  }

  closeBtn.addEventListener('click', function() {
    body.classList.remove('open');
    modalBack.classList.remove('open');
    for (let i = 0; i < modal.length; i++) {
      modal[i].classList.remove('open');
    }
    
  });

}
