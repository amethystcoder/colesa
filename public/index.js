
function submitmail(){
  let message_name = document.getElementById('name').value
  let message_email = document.getElementById('email').value
  let message_message = document.getElementById('text').value

  fetch('https://colesahealthcare.netlify.app/mailing.php',
  {
    method:'POST',
    body: JSON.stringify({
      name: message_name,
      email: message_email,
      message: message_message
    }),
    mode: 'cors',
    headers: {'Content-Type':'application/json'}
  })
  .then(Response =>{
    Response.text().then(data =>{
      console.log(data)
    })
  })
  .catch(err => console.log(err))
}

function togglesidebar(type){
  if(type == "open"){
    let small = document.getElementById("small")
    small.classList.remove("smaller-size")
    small.classList.add("smaller-size-open")
  }
  if(type == "close"){
    let small = document.getElementById("small")
    small.classList.remove("smaller-size-open")
    small.classList.add("smaller-size")
  }
}