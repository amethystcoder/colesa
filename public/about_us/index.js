window.addEventListener("scroll",(ev)=>{
    const body = document.querySelector("body")

    const undtopone = document.getElementById("undtopone")
    const undtoptwo = document.getElementById("undtoptwo")
    const undtopthree = document.getElementById("undtopthree")
    const undtopfour = document.getElementById("undtopfour")

    const frtopone = document.getElementById("frtopone")
    const frtoptwo = document.getElementById("frtoptwo")
    const frtopthree = document.getElementById("frtopthree")
    const frtopfour = document.getElementById("frtopfour")

    let bodytop = body.getBoundingClientRect().top

    if(bodytop > -109.33333587646484){
      undtopone.classList.replace("under-close-topic-div","under-topic-div")
      frtopone.classList.replace("back-topic-div","front-topic-div")
    }
    else{
      undtopone.classList.replace("under-topic-div","under-close-topic-div")
      frtopone.classList.replace("front-topic-div","back-topic-div")
    }
    if(bodytop > -520){
      undtoptwo.classList.replace("under-close-topic-div","under-topic-div")
      frtoptwo.classList.replace("back-topic-div","front-topic-div")
    }
    else{
      undtoptwo.classList.replace("under-topic-div","under-close-topic-div")
      frtoptwo.classList.replace("front-topic-div","back-topic-div")
    }
    if(body.getBoundingClientRect().width > 750.6666870117188){
      if(bodytop > -1143.3333740234375 && bodytop < -734){
        undtopthree.classList.replace("under-close-topic-div","under-topic-div")
        frtopthree.classList.replace("back-topic-div","front-topic-div")
      }
      else{
        undtopthree.classList.replace("under-topic-div","under-close-topic-div")
        frtopthree.classList.replace("front-topic-div","back-topic-div")
      }
      if(bodytop > -1387.3333740234375 && bodytop < -891.3333740234375){
        undtopfour.classList.replace("under-close-topic-div","under-topic-div")
        frtopfour.classList.replace("back-topic-div","front-topic-div")
      }
      else{
        undtopfour.classList.replace("under-topic-div","under-close-topic-div")
        frtopfour.classList.replace("front-topic-div","back-topic-div")
      }
    }
    else{
      if(bodytop > -1675.3333740234375 && bodytop < -1062){
        undtopthree.classList.replace("under-close-topic-div","under-topic-div")
        frtopthree.classList.replace("back-topic-div","front-topic-div")
      }
      else{
        undtopthree.classList.replace("under-topic-div","under-close-topic-div")
        frtopthree.classList.replace("front-topic-div","back-topic-div")
      }
      if(bodytop > -1885.3333740234375 && bodytop < -1375.3333740234375){
        undtopfour.classList.replace("under-close-topic-div","under-topic-div")
        frtopfour.classList.replace("back-topic-div","front-topic-div")
      }
      else{
        undtopfour.classList.replace("under-topic-div","under-close-topic-div")
        frtopfour.classList.replace("front-topic-div","back-topic-div")
      }
    }
    console.log(body.getBoundingClientRect().top)
})


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