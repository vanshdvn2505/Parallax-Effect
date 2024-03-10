document.addEventListener('mousemove',parallax);

function parallax(event){
    this.querySelectorAll('.move span').forEach((shift)=>{
        const pos = shift.getAttribute("value");
        const x = (window.innerWidth - event.pageX*pos)/90;
        const y = (window.innerHeight - event.pageY*pos)/90;

        shift.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
}