

const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
    .then(response => response.json())
    .then(data => displayBuddies(data));
}
loadBuddies();

const displayBuddies = data => {
    // console.log(data); // ekhane log kore dekha uchit
    // console.log(data.results);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies');
    for(const buddy of buddies){
        // console.log(buddy);
        // console.log(buddy.name.first, buddy.name.last);

        // console.log(buddy.email)
        const p = document.createElement('p');
        // p.innerText = buddy.email;
        p.innerText = `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} email: ${buddy.email}`;
        buddiesDiv.appendChild(p); 
    
    }

}