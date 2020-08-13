// HOME
function refresh() {
    setTimeout(function () {
        location.reload()
    }, 100);
}

/*-----alert-----*/
function updateInternetStatus() {
    if (navigator.onLine) {
        //alert('online')
        document.querySelector('#alerta').classList.add('hidden');
    } else {
        //alert('Internet offline')
        document.querySelector('#alerta').classList.remove('hidden');
    }
}
window.addEventListener('online', updateInternetStatus)
window.addEventListener('offline', updateInternetStatus)
updateInternetStatus()
/*-----alert-----*/
