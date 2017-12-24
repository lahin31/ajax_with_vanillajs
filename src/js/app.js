// Get Request
let loadUsers = () => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', '../assets/data.json', true);
    xhr.onload = function() {
        if(this.status === 200) {
            let users = JSON.parse(this.responseText);
            let results = '';
            for(let i = 0; i < users.length; i += 1) {
                results += `
                    <ul> 
                        <li>Name: ${users[i].name}</li>
                        <li>Id: ${users[i].id}</li>
                    </ul>
                `;
            }
            document.getElementById('area').innerHTML = results;
        } else if(this.status === 404) {
            document.getElementById('area').innerHTML = "There is something wrong";
        }
    }
    xhr.send();    
};

document.getElementById('user_button').addEventListener('click', loadUsers);