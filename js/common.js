'use strict';

{
  const Header = document.getElementById('js-header');
  const HeaderButton = document.getElementById('button2');

  HeaderButton.addEventListener('click', () => {
    Header.classList.toggle('is-open')
  })
}
$(".openbtn2").click(function () {
  $(this).toggleClass('active');
});