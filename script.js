document.getElementById('add').addEventListener("click", function () {
    document.getElementById('pop-up_bg').style.display = 'block'
})

document.getElementById('close').addEventListener('click', function () {
    document.getElementById('pop-up_bg').style.display = 'none'
    document.getElementById('error').innerText = ''
    document.getElementById('field_text').value = ''
})

document.getElementById('enter').addEventListener('click', function () {
    if (document.getElementById('field_text').value == '') {
        document.getElementById('error').innerText = "you must enter a title"
    } else {
        document.getElementById('pop-up_bg').style.display = 'none'
        let li = document.createElement('li')

        li.innerText = document.getElementById('field_text').value
        text.appendChild(li)
        li.style.borderBottom = '1px solid'
        li.style.padding = '1em'
        li.style.wordBreak = 'break-word'

        let btn = document.createElement('button')
        btn.innerText = 'Ред'
        li.appendChild(btn)
        let btn1 = document.createElement('button')
        btn1.innerText = 'Ред'
        li.appendChild(btn1)

        document.getElementById('error').innerText = ''
        document.getElementById('field_text').value = ''
    }

})


