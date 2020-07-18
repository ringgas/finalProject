let nama = [];
let komentar = [];
let email = [];

let dataHTML = "";

function onSubmit(event){
    event.preventDefault();
    let name = document.getElementById("nama").value;
    let komen = document.getElementById("komentar").value;
    let mail = document.getElementById("email").value;
    let n = document.forms["myForm"]["nama"].value;
    let e = document.forms["myForm"]["email"].value;
    let k = document.forms["myForm"]["komentar"].value;

    if (n == "") {
        alert("Nama tidak boleh kosong");
        
      }
      else if( e ==""){
        alert("Email tidak boleh kosong")
      }
      else if( k ==""){
        alert("Komentar tidak boleh kosong")
      }
      else{
        
        dataHTML = "";
        nama.unshift(name);
        komentar.unshift(komen);
        email.unshift(mail);
        for(let i = 0; i < nama.length; i++){
            let commD = komentar[i];
            
            for(let l = 0; l < commD.length; l++){
                
            }
                let imel = email[i];

                for(let j = 0; j < imel.length; j++){
                
                }
           
            dataHTML +=  '<h2>'+nama[i] + "</h2>"; 
            dataHTML +=  '<div class="meta">'+imel + "</div>";
            dataHTML +=  commD + "</td> <hr>";
          
        }
               
        
        document.getElementById("result").innerHTML = dataHTML;
        document.getElementById("nama").value
        document.getElementById("email").value
        document.getElementById("komentar").value
    }
      }

  
