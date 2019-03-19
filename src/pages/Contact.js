export default function Contact(){
    return `
        <form id="contact" action="http://formspree.io/rayemayberry@yahoo.com" method="POST">
        <label for="fname">First Name</label>
        <input type="text" name="first-name" id="fname" required>

        <label for="lname">Last Name</label>
        <input type="text" name="last-name" id="lname" required>

        <label for="email">Email</label>
        <input type="email" name="email" id="email" required>

        <label for="phone">Phone Number</label>
        <input type="tel" name="phone" id="phone">

        <label for="text">Your message here:</label>
        <textarea name="text" id="text" cols="30" rows="10" placeholder="Hello world!"></textarea>

        <input type="submit" value="Submit">
        <input type="reset" value="clear">
        </form>
    `;
}