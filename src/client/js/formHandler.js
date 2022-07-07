function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('text').value
    if(Client.notEmpty(formText) && formText.match(/(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:9000/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({url: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            document.getElementById('polarity').innerHTML = res.score_tag
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('text_snippet').innerHTML = res.sentence_list[0].text
        })
    } else {
        alert('Enter a valid url')
    }
}

export { handleSubmit }
