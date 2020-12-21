Notification.requestPermission(function(status){
    console.log('Notification persmission status', status)
});

async function showNotification() {
    const result =  await Notification.requestPermission();
    if(result === 'granted') {
        const npti = new Notification('Hello!', {
            body: 'It´s me',
            icon: 'images/bild1.jpg'
        });
        noti.onclick = () => alert('clicked');
    }
}
showNotification();