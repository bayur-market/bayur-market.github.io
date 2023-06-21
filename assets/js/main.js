const joinTotal = document.querySelector('#joinTotal');

fetch('https://sheetdb.io/api/v1/4adp0n2gipwg2/count')
  .then((response) => response.json())
  .then((data) => {
    joinTotal.innerHTML = data.rows;
  });

function formSubmit(data) {
  fetch('https://sheetdb.io/api/v1/4adp0n2gipwg2', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        data: [
            {
                'name': data.name.value,
                'email': data.email.value
            }
        ]
    })
})
  .then((response) => response.json())
  .then((data) => messagePopUp());
}

function messagePopUp() {
  alert('Terima kasih sudah bergabung!');
  location.reload();
}