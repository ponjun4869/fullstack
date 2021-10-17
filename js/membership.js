window.addEventListener('DOMContentLoaded', () => {

  // 「会員登録」ボタンの要素を取得
  const submit = document.querySelector('.submit');
  
  // 「送信」ボタンの要素にクリックイベントを設定する
  submit.addEventListener('click', (event) => {
      // デフォルトアクションをキャンセル
      event.preventDefault();

      // 「お名前」入力欄の空欄チェック
      // フォームの要素を取得
      const name = document.querySelector('#name');
      // エラーメッセージを表示させる要素を取得
      const errMsgName = document.querySelector('.err-msg-name');
      if(!name.value){
          // クラスを追加(エラーメッセージを表示する)
          errMsgName.classList.add('form-invalid');
          // エラーメッセージのテキスト
          errMsgName.textContent = 'お名前が入力されていません';
          // クラスを追加(フォームの枠線を赤くする)
          name.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      }else{
          // エラーメッセージのテキストに空文字を代入
          errMsgName.textContent ='';
          // クラスを削除
          name.classList.remove('input-invalid');
      }

      // 「ユーザーネーム」入力欄の空欄チェック
      // フォームの要素を取得
      const username = document.querySelector('#username');
      // エラーメッセージを表示させる要素を取得
      const errMsgUserName =  document.querySelector('.err-msg-username');
      if (!username.value) {
          // クラスを追加（エラーメッセージを表示する）
          errMsgUserName.classList.add('form-invalid');
          // エラーメッセージのテキスト
          errMsgUserName.textContent = 'ユーザーネームが入力されていません';
          // クラスを追加（フォームの枠線を赤くする）
          username.classList.add('input-invalid');
          // 後続の処理を止める
          return;
      } else {
          // エラーメッセージのテキストに空文字を代入
          errMsgUserName.textContent ='';
          // クラスを削除
          username.classList.remove('input-invalid');
      }

      // 「メールアドレス」の入力欄の形式チェック
      // フォームの要素を取得
      const email = document.querySelector('#email');
      // エラーメッセージを表示させる要素を取得
      const errMsgEmail = document.querySelector('.err-msg-email');
      // メールアドレスが適切かどうかのチェック
      if (!email.value.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}.[A-Za-z0-9]{1,}$/)) {
          errMsgEmail.classList.add('form-invalid');
          errMsgEmail.textContent = 'メールアドレスが適切ではありません';
          email.classList.add('input-invalid');
          return;
      } else {
        errMsgEmail.textContent = '';
        email.classList.remove('input-invalid');
      }

      // 「パスワード」入力欄の形式チェック
      const pass = document.querySelector('#password');
      const errMsgPass = document.querySelector('.err-msg-pass');
      // パスワードが8文字以上の半角英数字であるかどうかのチェック
      if(!pass.value.match(/^([a-zA-Z0-9]{8,})$/)){
          errMsgPass.classList.add('form-invalid');
          errMsgPass.textContent = '半角英数字8文字以上で入力してください';
          pass.classList.add('input-invalid');
          return;
      }else{
          errMsgPass.textContent ='';
          pass.classList.remove('input-invalid');
      }

      // 「パスワード」と「パスワード再入力」が一致しているかどうかのチェック
      const passRe = document.querySelector('#pass-re');
      const errMsgPassRe = document.querySelector('.err-msg-passre');
      if(pass.value !== passRe.value){
          errMsgPassRe.classList.add('form-invalid');
          errMsgPassRe.textContent = 'パスワードとパスワード再入力が一致していません';
          passRe.classList.add('input-invalid');
          return;
      }else{
          errMsgPassRe.textContent ='';
          passRe.classList.remove('input-invalid');
      }

      // 「プライバシーポリシーに同意する」に同意済みかどうかのチェック
      const privacy = document.querySelector('#privacy');
      const errMsgPrivacy = document.querySelector('.err-msg-privacy');
      if (!privacy.checked) {
        errMsgPrivacy.classList.add('form-invalid');
        errMsgPrivacy.textContent = '同意をいただいておりません';
        privacy.classList.add('input-invalid');
        return;
      } else {
        errMsgPrivacy.textContent ='';
        privacy.classList.remove('input-invalid');
      }
  }, false);
}, false);