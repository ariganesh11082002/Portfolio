// function submit(){
     
// }
function submit() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill out this field properly");
        return; // Stop the function if validation fails
    }

    // Create an object to store the data
    const contactData = {
        name,
        email,
        subject,
        message
    };

    // Retrieve existing data or initialize an empty array
    let contacts = JSON.parse(localStorage.getItem("contacts")) || [];

    // Add new data
    contacts.push(contactData);

    // Save back to localStorage
    localStorage.setItem("contacts", JSON.stringify(contacts));

    // Redirect to information.html
//     window.location.href = "information.html";
alert("Your Message Sent Successfully");
}