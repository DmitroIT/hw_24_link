const button1 = document.createElement('button')
button1.innerText = 'button'
button1.style.margin = '0 20px'
document.body.append(button1)

const button2 = document.createElement('button')
button2.innerText = 'button'
document.body.append(button2)



function forwarding() {
    let inputURL = prompt("Введите адрес");
    let httpRegex = /^http[s]?:\/\//;
  
    if (!httpRegex.test(inputURL)) {
      inputURL = "https://" + inputURL; 
      console.log(inputURL)
    }
    window.location.href = inputURL
  }
  document.addEventListener("click", forwarding);
  document.addEventListener("click", forwarding);


