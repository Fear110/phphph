class UI {
  
  constructor(){}

  validateSignUpForm(data) {
    let hasError = false;
    for(const entry of data) {
      if(entry[0] !== "receiveLetter") {
        if(entry[1] === "" 
              || (entry[0] ==="email" && !validateEmail(entry[1]))) {
                console.log("error here: ", entry)
          this.addErrorClass(entry[0]);
          hasError = true;
        } else {
          this.removeErrorClass(entry[0]);
        }
      }
    }
    return hasError;
  }

  addErrorClass(componentId) {
    const component = document.getElementById(componentId);
    component.classList.add("error");
    component.classList.add("error-animate");
    setTimeout(() => {
      component.classList.remove("error-animate")
    }, 300);
  }

  removeErrorClass(componentId) {
    const component = document.getElementById(componentId);
    component.classList.remove("error");
  }

}