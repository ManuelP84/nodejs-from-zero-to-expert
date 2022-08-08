console.log('Program start')

setTimeout(() => {
    console.log('First timeout')
}, 3000)

setTimeout(() => {
    console.log('Second timeout')
})

setTimeout(() => {
    console.log('Third timeout')
})


console.log('Program end')