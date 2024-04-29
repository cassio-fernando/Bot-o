document.querySelector("#no").addEventListener("mouseover", function() {
    let h = window.innerHeight - 50;
    let w = window.innerWidth - 50;
    this.style.position = "absolute"
    this.style.top = Math.floor(Math.random() * h) + "px";
    this.style.left = Math.floor(Math.random() * w) + "px";
}
)
function text() {
    Swal.fire({
        title: "EITA CARALHO 😈",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
}
 