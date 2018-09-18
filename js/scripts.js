// DAY 11 - FETCH / Objedts (Advnaced) / JS Classes

// fetch gets data from a url- The URL has to be set up to return data and not just a website.
//Instead of www. API's will begin with api.
function getRepos() {
  return fetch('https://api.github.com/users/bitmogram/repos').then(data => {
    return data.json();
  }).then(repos => {
    let repoList = document.getElementById("myRepos");
    console.log(repos[0]);
    repos.forEach(repo => {
      // if (repo.name === "bootcamp2-work") {return; } // The word return means this function is done. It basically ends tootcamp2... before the code below gets applied to it.
      let temp = document.createElement("li");
      let paragraph = document.createElement("p");
      let link = document.createElement("a");
      temp.setAttribute("class", "list-group-item");
      paragraph.textContent = repo.name;
      link.textContent = "View";
      link.setAttribute("href", repo.html_url);
      link.setAttribute("target", "_blank");
      temp.appendChild(paragraph)
      temp.appendChild(link);
      repoList.appendChild(temp);
    });
    console.log(repos);
  })
}

getRepos();


// JavaScript CLASSES

class User {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    // alert(this.name);
  }
}
let user = new User("Jordan");
user.sayHello();



//React is a framework that is popular. It is built by Facebook.
//ember is a JS framework - this one is OK. 
