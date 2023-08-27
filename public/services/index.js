window.addEventListener("scroll",(ev)=>{
    const body = document.querySelector("body")

    const lnbrkone = document.getElementById("line-brk-one")
    const lnbrktwo = document.getElementById("line-brk-two")
    const lnbrkthree = document.getElementById("line-brk-three")
    const lnbrkfour = document.getElementById("line-brk-four")

    let bodytop = body.getBoundingClientRect().top

    if(bodytop > -1369.3333740234375 && bodytop < -400){
        lnbrkone.classList.add("line-brk-anim")
        lnbrkone.classList.remove("line-brk-anim-end")
    }
    else{
        lnbrkone.classList.remove("line-brk-anim")
        lnbrkone.classList.add("line-brk-anim-end")
    }
    if(bodytop > -1910 && bodytop < -963.3333740234375){
        lnbrktwo.classList.add("line-brk-anim")
        lnbrktwo.classList.remove("line-brk-anim-end")
    }
    else{
        lnbrktwo.classList.remove("line-brk-anim")
        lnbrktwo.classList.add("line-brk-anim-end")
    }
    if(bodytop > -2489.33349609375 && bodytop < -1594){
        lnbrkthree.classList.add("line-brk-anim")
        lnbrkthree.classList.remove("line-brk-anim-end")
    }
    else{
        lnbrkthree.classList.remove("line-brk-anim")
        lnbrkthree.classList.add("line-brk-anim-end")
    }
    if(bodytop < -2027.33349609375){
        lnbrkfour.classList.add("line-brk-anim")
        lnbrkfour.classList.remove("line-brk-anim-end")
    }
    else{
        lnbrkfour.classList.remove("line-brk-anim")
        lnbrkfour.classList.add("line-brk-anim-end")
    }
    console.log(body.getBoundingClientRect().top)
})

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