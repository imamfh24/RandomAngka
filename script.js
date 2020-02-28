const inputAngka = document.getElementById('batasAngka');

inputAngka.oninput = setBatas;
function setBatas (){
    const batasAngka = inputAngka.value;
    return batasAngka;
}

const btnRandom = document.getElementById('randomAngka');
btnRandom.addEventListener('click',function(e){
    e.preventDefault();
    const batasan = setBatas();
    const random = Math.round(Math.random() * batasan);
    
    const nilai = document.getElementById('hasilRandom')
    nilai.innerHTML = random;

    if (!liff.isInClient()) {
        sendAlertIfNotInClient();
    } else {
        liff.sendMessages([{
            'type': 'text',
            'text': "Kamu telah melakukan random angka yang bernilai : " + random + ""
        }]).then(function () {
            window.alert('Kamu telah melakukan random angka');
        }).catch(function (error) {
            window.alert('What happend?');
        });
    }
});
