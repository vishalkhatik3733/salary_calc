window.addEventListener("load", bindEvents);
function bindEvents() {
    document.getElementById("compute").addEventListener("click", computeIt);
}
function validate(bs) {
    //let bs = document.querySelector("#basicsalary").value;
    if (bs.length == 0) {
        document.querySelector("#error").innerText = "Salary is Blank Please Fill It";
        return false;
    }
    document.querySelector("#error").innerText =
        "";
    return true;
}
function computeIt() {
    let bs = document.getElementById("basicSalary").value;
    if (!validate(bs)) {
        return; //exit from the function
    }
    allowances.basicSalary = parseInt(bs);

    // object traverse using for in loop
    let fieldset = document.querySelector("fieldset");
    fieldset.innerHTML = "";
    for (let key in allowances) {
        if (typeof allowances[key] === "function") {
            let pTag = document.createElement("p");
            pTag.innerHTML = `${key.toUpperCase()} is <i>&#8377;</i> ${allowances[key]().toLocaleString("hi-IN")}`;
            fieldset.appendChild(pTag);
            // console.log(key, allowances[key]());
        }
    }


    //document.getElementById("hra").innerText = allowances.hra();
    //document.getElementById("da").innerText = allowances.da();
    //document.getElementById("ta").innerText = allowances.ta();
    //document.getElementById("ma").innerText = allowances.ma();
    //document.getElementById("pf").innerText = allowances.pf();
    //document.getElementById("gs").innerText = allowances.gs(); 
    //document.getElementById("ns").innerText = allowances.ns();

}  
