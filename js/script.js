'use strict'

{
  // 回答一覧
  const CORRECT_ANSWERS = [
    {
      index: 1, // 配列で扱う場合は、プログラム上は0から始まる
      value: '約79万人',
    },
    {
      index: 2,
      value: 'X-TECH',
    },
    {
      index: 0,
      value: 'Internet of Things',
    },
    {
      index: 0,
      value: 'Society 5.0',
    },
    {
      index: 0,
      value: 'Web3.0',
    },
    {
      index: 1,
      value: '約5倍',
    },
  ];

  // すべての問題を取得
  const allQuiz = document.querySelectorAll('.js-quiz') // 配列！

  // buttonタグにdisabledを付与
  const setDisabled = (answers) => {
    // アロー関数。functionと同じ感じ
    answers.forEach((answer) => {
      // ボタンの数(3回)まわす
      answer.disabled = true // ボタンを非活性化 → 1回クリックしたら、もうクリックできない
    })
  }
  // trueかfalseで出力する文字列を出し分ける
  const setTitle = (target, isCorrect) => {
    // targetはanswerTitle
    target.innerText = isCorrect ? '正解！' : '不正解...' // 三項演算子。trueなら正解(左側)、falseなら不正解(右側)
  }
  const setClassName = (target, isCorrect) => {
    target.classList.add(isCorrect ? 'is-correct' : 'is-incorrect') // クラス名をつけてあげてる
  }

  // 各問題の中での処理
  allQuiz.forEach((quiz) => {
    // q1, q2, q3, q4, q5, q6を回す 問題数が増えても対応できる！quizにq1~q6が入る
    const answers = quiz.querySelectorAll('.js-answer') // js-quizの中のjs-answerを取得
    const selectedQuiz = Number(quiz.getAttribute('data-quiz')) // data-hoge わかりやすい名前をつけて良い！
    const answerBox = quiz.querySelector('.js-answerBox')
    const answerTitle = quiz.querySelector('.js-answerTitle')
    const answerText = quiz.querySelector('.js-answerText')

    answers.forEach((answer) => {
      // ここでは3回まわる
      answer.addEventListener('click', () => {
        // それぞれのボタンに、クリックした時の処理を追加
        answer.classList.add('is-selected') // クリックしたら、is-selectedクラスを付与
        const selectedAnswer = Number(answer.getAttribute('data-answer'))
        // とってきた0~2の「文字列」を数値に変換

        // 全てのボタンを非活性化
        setDisabled(answers) // 読みやすくするために外に出してる！関数名にやりたいことを書く！
        // × hikasseinisuru()

        // 正解ならtrue, 不正解ならfalseをcheckCorrectに格納
        const isCorrect = CORRECT_ANSWERS[selectedQuiz].index === selectedAnswer
        // 1回目なら、 CORRECT_ANSWERS[0].index === selectedAnswer
        // 1 === 1 なら正解
        // "1" === 1 はfalse

        // 回答欄にテキストやclass名を付与
        answerText.innerText = CORRECT_ANSWERS[selectedQuiz].value // "約79万人"
        setTitle(answerTitle, isCorrect)
        setClassName(answerBox, isCorrect)
      })
    })
  })
}









