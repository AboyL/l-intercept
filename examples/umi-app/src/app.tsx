if ('serviceWorker' in navigator) {
  // 注册
  navigator.serviceWorker
    .register('/sw.js')
    .then(registeration => {
    }).catch(err => {
      console.log(err)
    })
}