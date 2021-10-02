document.getElementById('fbtn').onclick = function(e) {
    e.preventDefault();
    let telmail = document.getElementById('telmail').value;
    let userName = document.getElementById('fname').value;
    let usertext = document.getElementById('ftext').value;
    const token = '2010644342:AAGalwQ7a5ddl566yrnmjQcDLpBo9o7zgNE';
    let chatsId = ['80268845', '385570638', '1310476218'];
    // let chatsId = ['80268845'];
    let msg = `Заявка с сайта http://rema-rus.ru%0A%0AИмя: ${userName}%0AТелефон/почта: ${telmail}%0A%0AСообщение: ${usertext}`;

    chatsId.forEach((e) => {
        let url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${e}&text=`;
        let xhhtp = new XMLHttpRequest();
        xhhtp.open("GET", url + msg, true);
        xhhtp.send();
    })

    document.querySelector('.feedback-form').innerHTML = '<p class="feedback-after-send">Спасибо.<br>Ваша заявка получена.</p>';
}