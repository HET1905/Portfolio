$(document).ready(function(){
    // alert('script attaced');
    $('#btnSubmit').on('click',function(){

        let h2 = $('<h2>');
        h2.attr('class','thankYouH2');

        let client_name = $('#txtName').val().trim();
        let email = $('#txtEmail').val().trim();
        let client_message = $('#txtMessage').val().trim();
        // let dataSaved = false;
        // console.log(client_name,emai,client_message);

        let newContact = {
            client_name : client_name,
            email: email,
            client_message : client_message
        }

        console.log(newContact);

        if(client_name && email){
            $.post('/api/contact',newContact,(err,data)=>{
                // console.log(data);
                if(err){
                    throw err;
                }
            //    dataSaved = true
              

            });
        }
        
        setTimeout(function() {
            
            h2.text('I will contact you soon...Thank You');
            $('.formCol').append(h2);
           
        }, 1000); // 

       
    })
})