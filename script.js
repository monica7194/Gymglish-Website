
const myform = document.getElementById("myform");
const myInput = document.getElementById("my-div");
const msgBox = document.getElementById("msg");
const mymodal = document.querySelector("#myModal");

myform.onsubmit =  (e)  => {

    e.preventDefault();
        let name =  e.target.firstName.value;

           if(name == "") {
             myInput.classList.add("has-error");
           } else {
              DisplayMsgAlert();
              setTimeout(HideMsg,5000);
          }

        function DisplayMsgAlert() {
          
            $('#myModal').modal( 'hide' ); 
            myform.reset();
            msgBox.style.display = "block";
            msgBox.innerHTML = `The model is successfully closed by <strong> ${name}</strong> `; 
      }
 }

 
      function  HideMsg() {
        msgBox.style.display = "none";
      }

      function RemoveClass() {
        myInput.classList.remove("has-error");
      }



