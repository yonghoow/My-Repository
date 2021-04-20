//Global variables
var formList = [];


function resetError() {
    document.querySelector("#checkboxErrorMsg").innerHTML = "";
    document.querySelector("#termsErrorMsg").innerHTML = "";
}

function submitForm() {

    resetError();
    
    //pass the input values to variables
    var name = document.querySelector("#full_name").value;
    var email = document.querySelector("#email").value;
    var tourPackage = document.querySelector("#tour_package").value;
    var arrivalDate = document.querySelector("#arrival_date").value;
    var numPax = document.querySelector("#num_pax").value;

    //checkBox
    var checkBoxArray = [];
    checkBoxArray.push(document.querySelector("#c_food").checked);
    checkBoxArray.push(document.querySelector("#c_sightseeing").checked);
    checkBoxArray.push(document.querySelector("#c_culture").checked);

    var discount = document.querySelector("#discount").value;

    //radio button
    var agree = document.querySelector("#radio_agree").checked
    var disagree = document.querySelector("#radio_disagree").checked

    console.log(`${name} ${email} ${tourPackage} ${arrivalDate}`);

    //validation : checkbox must have at least one experience ticked
    var found = false;
    checkBoxArray.forEach(item => {
        if (item) {    // == true
            found = true;
        }
            
    });
    
    if(!found) {
        document.querySelector("#checkboxErrorMsg").innerHTML = "Please select at least one experience";
        document.querySelector("#checkboxErrorMsg").style.color = "red"; //replace with #xxxx
        //styling the error message to be in css
    }

    //handle if user clicks on the disagree for the terms and conditions
    if (disagree) {
        document.querySelector("#termsErrorMsg").innerHTML = "Please select AGREE to terms and conditions";
        document.querySelector("#termsErrorMsg").style.color = "red";

    }
    //ensure one of the checkbox is checked 
    //ensure agree radio button is checked.
    //before the values are stored into the array

    if (found && agree) {
        addToList(name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount);

        //modal pop out
    }
}

function addToList(name, email, tourPackage, arrivalDate, numPax, checkBoxArray, discount) {
    //store the values into the formList array - push object to the formList array
    //create an object (e.g. Person)

    const item = {
        i_name: name,   //key-value pair
        i_email: email,
        i_tour: tourPackage,
        i_arrival: arrivalDate,
        i_pax: numPax,
        food: checkBoxArray[0],
        sightseeing: checkBoxArray[1],
        culture: checkBoxArray[2],
        i_discount: discount 
    }

    formList.push(item);

    listForm();

}

function listForm() {
    console.log("Total Reservation: " + formList.length);
    console.log(formList);
}