window.addEventListener("load",(ev)=>{
    let Sex = document.getElementsByName("QR~QID5")
    for (let index = 0; index < Sex.length; index++) {
        Sex[index].addEventListener("click",()=>{
            if(Sex[index].checked){
                Sex[index].style.color = "blue"
                console.log("clack");
            }
        })
    }
    let AppointmentTypeOne = document.getElementById("QR~QID8~1")
    let AppointmentTypeTwo = document.getElementById("QR~QID8~2")
    let AppointmentTypeThree = document.getElementById("QR~QID8~3")
    let AppointmentTypeFour = document.getElementById("QR~QID8~4")
    AppointmentTypeOne.addEventListener("click",()=>{
        if(AppointmentTypeOne.checked){
            AppointmentTypeOne.style.color = "blue"
            console.log("clack");
        }
    })
    AppointmentTypeTwo.addEventListener("click",()=>{
        if(AppointmentTypeTwo.checked){
            AppointmentTypeTwo.style.color = "blue"
            console.log("clack");
        }
    })
    AppointmentTypeThree.addEventListener("click",()=>{
        if(AppointmentTypeThree.checked){
            AppointmentTypeThree.style.color = "blue"
            console.log("clack");
        }
    })
    AppointmentTypeFour.addEventListener("click",()=>{
        if(AppointmentTypeFour.checked){
            AppointmentTypeFour.style.color = "blue"
            console.log("clack");
        }
    })
    let FollowupMethod = document.getElementsByName("QR~QID10")
    let FollowupMethod_value = ""
    for (let index = 0; index < FollowupMethod.length; index++) {
        FollowupMethod[index].addEventListener("click",()=>{
            if(FollowupMethod[index].checked){
                FollowupMethod[index].style.color = "blue"
                console.log("clack");
            }
        })
    }
})

function submitform(){
    let Salutation = document.getElementById("QR~QID12")
    let LegalName = document.getElementById("QR~QID2~1")
    let LegalSurname = document.getElementById("QR~QID2~2")
    let Birthdate = document.getElementById("QR~QID3")
    let Requestername = document.getElementById("QR~QID4")
    let Sex = document.getElementsByName("QR~QID5")
    let sex_value = ""
    for (let index = 0; index < Sex.length; index++) {
        if(Sex[index].checked){
            sex_value = Sex[index].value
        }
    }
    let Mobileno = document.getElementById("QR~QID6")
    let Email = document.getElementById("QR~QID7")

    //let AppointmentType = document.querySelector()//QR~QID8~1 Check how to deal with checkboxes online
    let appointment_type_value = []
    let AppointmentTypeOne = document.getElementById("QR~QID8~1")
    let AppointmentTypeTwo = document.getElementById("QR~QID8~2")
    let AppointmentTypeThree = document.getElementById("QR~QID8~3")
    let AppointmentTypeFour = document.getElementById("QR~QID8~4")
    if(AppointmentTypeOne.checked){
        appointment_type_value.push(AppointmentTypeOne.value)
    }
    if(AppointmentTypeTwo.checked){
        appointment_type_value.push(AppointmentTypeTwo.value)
    }
    if(AppointmentTypeThree.checked){
        appointment_type_value.push(AppointmentTypeThree.value)
    }
    if(AppointmentTypeFour.checked){
        appointment_type_value.push(AppointmentTypeFour.value)
    }

    let AppointmentReason = document.getElementById("QR~QID9")
    let FollowupMethod = document.getElementsByName("QR~QID10")
    let FollowupMethod_value = ""
    for (let index = 0; index < FollowupMethod.length; index++) {
        if(FollowupMethod[index].checked){
            FollowupMethod_value = FollowupMethod[index].value
        }
    }

    console.log(Salutation.value)
    console.log(LegalName.value);
    console.log(LegalSurname.value);
    console.log(Birthdate.value);
    console.log(sex_value)
    console.log(Requestername.value);
    console.log(Mobileno.value);
    console.log(Email.value);
    console.log(appointment_type_value);
    console.log(AppointmentReason.value);
    console.log(FollowupMethod_value);
}