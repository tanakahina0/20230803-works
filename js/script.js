document.querySelectorAll('.product').forEach(function (product) {
  product.addEventListener('click',function() {
      const title = this.querySelector('h3').innerText;
      const imagesrc = this.querySelector('img').src;
      const description = this.getAttribute('data-description');
      document.getElementById('modal-title').innerText = title;
      document.getElementById('modal-image').innerText = imagesrc;
      document.getElementById('modal-text').innerText = description;
      document.getElementById('modal').style.display = 'block';
  });
});

document.querySelector('.close-button').addEventListener('click',function () {
  document.getElementById('modal').style.display = 'none';
});

// 入力空欄チェック
document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault(); // フォーム送信を一旦停止
  let errorMessage = '';
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // 空欄の項目がある場合、エラーメッセージを追加
  if (!name) {
    errorMessage += 'お名前が未入力です。<br>';
  }
  if (!email) {
    errorMessage += 'メールアドレスが未入力です。<br>';
  }
  if (!message) {
    errorMessage += 'メッセージが未入力です。<br>';
  }
  const errorMessageElement = document.getElementById('errorMessage');
  // エラーメッセージがある場合、赤文字で表示
  if (errorMessage) {
    errorMessageElement.innerHTML = errorMessage;
    errorMessageElement.style.color = 'red';
    errorMessageElement.style.display = 'block';
  } else {
    // エラーがない場合、「送信しました！」を黒文字で表示
    errorMessageElement.innerHTML = '送信しました！';
    errorMessageElement.style.color = 'black';
    errorMessageElement.style.display = 'block';
    // フォームの内容をリセット
    document.getElementById('contactForm').reset();
  }
  });