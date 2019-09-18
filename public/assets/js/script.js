$(document).ready(function(){
    // alert('script attaced');
    $('#btnSubmit').on('click',function(e){
        e.preventDefault();
        let h2 = $('<h2>');
        // let error = $('<span>')

        h2.attr('class','thankYouH2');
        // error.attr('class','error');

        let client_name = $('#txtName').val().trim();
        let email = $('#txtEmail').val().trim();
        let client_message = $('#txtMessage').val().trim();
        
        let dataSaved = false;
        // console.log(client_name,emai,client_message);

        let newContact = {
            client_name : client_name,
            email: email,
            client_message : client_message
        }
        console.log(newContact);
        if(client_name===''){
            $('.errName').text('Insert your name');
            return false;
        }
        if(email==='' || !isValidEmail()){
            $('.errEmail').text('Insert your valid email');
            return false;
        }
        if(client_name !== '' && email !== ''){
            $.post('/api/contact',newContact,(err,data)=>{
                // console.log(data);
                if(err){
                    throw err;
                }
            });
            dataSaved = true;
            $('.errName').text('');
            $('.errEmail').text('');
        }
       
        if(dataSaved=== true){
            h2.text('I will contact you soon...Thank You');
            $('.formCol').append(h2);
            // return false;   
        }
        
       
    });
    function isValidEmail() {
        console.log('inside fun');
        let email = $('#txtEmail').val().trim();
        var pattern = new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);
        return pattern.test(email);
    };
})