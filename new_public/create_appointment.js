window.addEventListener("load",(ev)=>{
    let Sex = document.getElementsByName("QR~QID5")
    let Sex_Label = document.getElementsByClassName("sx-radio")
    for (let index = 0; index < Sex.length; index++) {
        Sex[index].addEventListener("click",()=>{
            for (let indx = 0; indx < Sex.length; indx++) {
                if(Sex[indx].checked){
                    Sex_Label[indx].style.backgroundColor = "blue"
                }
                else{
                    Sex_Label[indx].style.backgroundColor = "white"
                }
            }
        })
    }
    let AppointmentTypeOne = document.getElementById("QR~QID8~1")
    let AppointmentTypeTwo = document.getElementById("QR~QID8~2")
    let AppointmentTypeThree = document.getElementById("QR~QID8~3")
    let AppointmentTypeFour = document.getElementById("QR~QID8~4")
    let Appointment_Label = document.getElementsByClassName("app-checkbox")
    AppointmentTypeOne.addEventListener("click",()=>{
        if(AppointmentTypeOne.checked){
            Appointment_Label[0].style.backgroundColor = "blue"
        }
        else{
            Appointment_Label[0].style.backgroundColor = "white"
        }
    })
    AppointmentTypeTwo.addEventListener("click",()=>{
        if(AppointmentTypeTwo.checked){
            Appointment_Label[1].style.backgroundColor = "blue"
        }
        else{
            Appointment_Label[1].style.backgroundColor = "white"
        }
    })
    AppointmentTypeThree.addEventListener("click",()=>{
        if(AppointmentTypeThree.checked){
            Appointment_Label[2].style.backgroundColor = "blue"
        }
        else{
            Appointment_Label[2].style.backgroundColor = "white"
        }
    })
    AppointmentTypeFour.addEventListener("click",()=>{
        if(AppointmentTypeFour.checked){
            Appointment_Label[3].style.backgroundColor = "blue"
        }
        else{
            Appointment_Label[3].style.backgroundColor = "white"
        }
    })
    let FollowupMethod = document.getElementsByName("QR~QID10")
    let FollowupMethodRadio = document.getElementsByClassName("flw-radio")
    for (let index = 0; index < FollowupMethod.length; index++) {
        FollowupMethod[index].addEventListener("click",()=>{
            for (let indx = 0; indx < FollowupMethod.length; indx++) {
                if(FollowupMethod[indx].checked){
                    FollowupMethodRadio[indx].style.backgroundColor = "blue"
                }
                else{
                    FollowupMethodRadio[indx].style.backgroundColor = "white"
                }
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

    fetch("",
    {method:'POST',
    body:JSON.stringify({
        salutation:Salutation.value,
        legal_name:LegalName.value,
        legal_surname:LegalSurname.value,
        birthdate:Birthdate.value,
        sex:sex_value,
        requester_name:Requestername.value,
        mobileno:Mobileno.value,
        email:Email.value,
        appointment_type:appointment_type_value,
        appointment_reason:AppointmentReason.value,
        followupmethod:FollowupMethod_value
    })})
}