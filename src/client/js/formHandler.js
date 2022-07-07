function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    const formText = document.getElementById('text').value
    if(Client.notEmpty(formText)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:9000/test', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({article: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            console.log(res)
            document.getElementById('polarity').innerHTML = res.score_tag
            document.getElementById('subjectivity').innerHTML = res.subjectivity
            document.getElementById('text_snippet').innerHTML = res.sentence_list[0].text
        })
    } else {
        alert('Text field must be filled')
    }
}

export { handleSubmit }
