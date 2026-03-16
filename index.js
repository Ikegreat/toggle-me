const toggle = document.querySelector("#togglePrice")
const basic = document.querySelector("#basic")
const pro = document.querySelector("#professional")
const master = document.querySelector("#master")

toggle.addEventListener("change", () => {
    if(toggle.checked) {
        basic.textContent = "$19.99"
        pro.textContent = "$24.99"
        master.textContent = "$39.99"
    } else {
        basic.textContent = "$199.99"
        pro.textContent = "$249.99"
        master.textContent = "$399.99"
    }
})