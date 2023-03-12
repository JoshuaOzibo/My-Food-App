// event for shop snack with blink
const shopNow = document.querySelector('#shopnow-btn');
const shopNowInput = document.querySelector('#shopnow-input');
const check = document.querySelector('#flexCheckDefault');
shopNow.addEventListener('click', (e) =>{
    e.preventDefault();
    const preloader = document.createElement('div');
    preloader.className = 'spinner-border text-danger';
    preloader.classList.add('pre-Loader2');
    shopNow.appendChild(preloader);
    preloader.style.width = '25px';
    preloader.style.height = '25px';
    setTimeout(()=>preloader.remove(), 1000)

    if(shopNowInput.value === "" ){

        const createError = document.createElement('div');
        createError.className="text-danger p-0";
        const createText = document.createTextNode('please enter delivery address!');
        createError.appendChild(createText);
        setTimeout(() =>createError.remove(), 2000);
        createError.classList.add('error-msg')
        const errorPosition = document.querySelector('.showcase .text');
        const errorPosition2 = document.querySelector('title h1');
        errorPosition.insertBefore(createError, errorPosition2);
    }else{
        
        const preloader = document.createElement('div');
        preloader.className = 'spinner-border text-success';
        preloader.classList.add('pre-Loader2');
        shopNow.appendChild(preloader);
        preloader.style.width = '25px';
        preloader.style.height = '25px';
        setTimeout(()=>preloader.remove(), 1000)

        const successMsg = document.createElement('div');
        successMsg.className="text-success p-0";
        const createText = document.createTextNode('Successfully Sent');
        successMsg.appendChild(createText);
        setTimeout(() =>successMsg.remove(), 2000);
        successMsg.classList.add('error-msg');
        const errorPosition = document.querySelector('.showcase .text');
        const errorPosition2 = document.querySelector('title h1');
        errorPosition.insertBefore(successMsg, errorPosition2);
    }
    shopNowInput.value ="";
});
// add event to the sign in btn
const signInBtn = document.querySelector('#signin-btn');
const signIn = document.querySelector('.sign-in');
const email = document.querySelector('.email');
signInBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const preloader = document.createElement('div');
    preloader.className = 'spinner-border text-danger';
    preloader.classList.add('pre-Loader');
    signInBtn.appendChild(preloader);
    preloader.style.width = '25px';
    preloader.style.height = '25px';
    setTimeout(()=>preloader.remove(), 2000)

    if(signIn.value === "" || email.value === ""){
        const signInError = document.createElement('div');
        signInError.className = 'text-danger text-center fw-bold';
        signInError.style.marginTop = '-15px';
        const signInTextNode = document.createTextNode('FILL ALL FIELD');
        signInError.appendChild(signInTextNode);
        setTimeout(() =>signInError.remove(), 1000);

        const signInPosition = document.querySelector('.modal-body');
        const signInPosition2 = document.querySelector('.sign-in-put');
        signInPosition.insertBefore(signInError, signInPosition2);
    } else{
        const preloader = document.createElement('div');
        preloader.className = 'spinner-border text-success';
        preloader.classList.add('pre-Loader');
        signInBtn.appendChild(preloader);
        preloader.style.width = '25px';
        preloader.style.height = '25px';
        setTimeout(()=>preloader.remove(), 2000)

        const signInSuccess = document.createElement('div');
        signInSuccess.className = 'text-success text-center fw-bold';
        signInSuccess.style.marginTop = '-15px'
        const signInTextNode = document.createTextNode('SUCCESSFULLY SIGNED-IN');
        signInSuccess.appendChild(signInTextNode);
        setTimeout(() =>signInSuccess.remove(), 1000);

        const signInPosition = document.querySelector('.modal-body');
        const signInPosition2 = document.querySelector('.sign-in-put');
        signInPosition.insertBefore(signInSuccess, signInPosition2);
    }
    signIn.value = "";
    email.value = "";
});

// Add event to create account  btn
const firstName = document.querySelector('.first-name');
const lastName = document.querySelector('.last-name');
const AccEmail = document.querySelector('.acc-email');
const AccPassword = document.querySelector('.acc-password');
const Accbtn = document.querySelector('#CreateAcc-btn');
Accbtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const preloader = document.createElement('div');
    preloader.className = 'spinner-border text-danger';
    preloader.classList.add('pre-Loader2');
    Accbtn.appendChild(preloader);
    preloader.style.width = '25px';
    preloader.style.height = '25px';
    setTimeout(()=>preloader.remove(), 2000)

    if(firstName.value === "" || lastName.value === "" || AccEmail.value ==="" || AccPassword.value === ""){
        const createError = document.createElement('div');
        createError.className = 'text-danger text-center fw-bold';
        createError.style.marginTop = '-15px';
        const createAccTextNode = document.createTextNode('FILL ALL FIELD');
        createError.appendChild(createAccTextNode);
        setTimeout(() =>createError.remove(), 1000);

        const createAccPosition = document.querySelector('#createAcc');
        const createAccPosition2 = document.querySelector('.createAcc');
        createAccPosition.insertBefore(createError, createAccPosition2);
    } else{
        const preloader = document.createElement('div');
        preloader.className = 'spinner-border text-success';
        preloader.classList.add('pre-Loader2');
        Accbtn.appendChild(preloader);
        preloader.style.width = '25px';
        preloader.style.height = '25px';
        setTimeout(()=>preloader.remove(), 2000)

        const createSuccess = document.createElement('div');
        createSuccess.className = 'text-success text-center fw-bold';
        createSuccess.style.marginTop = '-15px';
        const createAccTextNode = document.createTextNode('SUCCESSFULLY CREATED');
        createSuccess.appendChild(createAccTextNode);
        setTimeout(() =>createSuccess.remove(), 1000);

        const createAccPosition = document.querySelector('#createAcc');
        const createAccPosition2 = document.querySelector('.createAcc');
        createAccPosition.insertBefore(createSuccess, createAccPosition2)
    }
    firstName.value = "";
    lastName.value = "";
    AccEmail.value = "";
    AccPassword.value = "";
});



//add event to all btn ad functionality

const card = document.querySelectorAll('#addbtn');
const cardPizza = document.querySelector('#pizza');
const cartBody = document.querySelector('.cartBody');
const storeItem = document.querySelector('.store-item');



const generalCard = card.forEach((e) =>{
    e.addEventListener("click", function(event) {
        event.preventDefault();

        if(event.target.parentElement.classList.contains('#addbtn'));
        console.log(event.target.parentElement);


        /*
        console.log(r.path[3] r.path[3].childNodes[1]);

        // appen img to cart
        const imgToCart = r.path[3].childNodes[1];
        console.log(imgToCart)




        //general div
        const newCard = document.createElement('div');
        newCard.className="col-md-3 col-sm-6";
        console.log(newCard)

        //for shadow
        const cardShadow = document.createElement("div");
        cardShadow.classList="card shadow";

        newCard.append(cardShadow);

        cardShadow.append(imgToCart);

        cartBody.append(newCard)

        

        //pizza body 
        const pizzaBody = document.createElement('span');
        pizzaBody.className = 'pizza-body';
        //cardShadow.append(pizzaBody)

        //overflow
        const cardOverflow = document.createElement('div');
        cardOverflow.className = "overlay";
        pizzaBody.append(cardOverflow);


        //overFlow input
        const overflowInput = document.createElement('button');
        overflowInput.classList = "btn  btn-outline-warning fw-bold";
        overflowInput.textContent = "Sign-Up";
        overflowInput.id = "btn-hover";
        cardOverflow.append(overflowInput);




        //create overflow img
        const overFlowImg = document.createElement('img');
        overFlowImg.className = "img-fluid p-2 img";
        pizzaBody.append(overFlowImg);

        */
       
    })
});



 /*
        const newCard = document.createElement("div");
        newCard.className = "col-md-3 col-sm-6";
        const genTextNode = document.createTextNode(`${generalCard}`);
        newCard.append(genTextNode);
        console.log(newCard)
        */
