//service worker check
if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register('sw.js').then(swRegistration => {
        console.log("SW is Registered Sucessfully!");
        console.log(swRegistration)
    }).catch(err => {
        console.log("SW Registration Failed :(")
        console.log(err)
    })
}