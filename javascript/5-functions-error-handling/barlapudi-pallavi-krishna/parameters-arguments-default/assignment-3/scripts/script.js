function perimeter(length=10,breadth=10){
    function area(length,breadth){
        const areares=length*breadth;
        document.getElementById("results").innerHTML+=`Area of Rectangle: ${areares}`;
    }
    document.getElementById("results").innerHTML="";
    const perimeterres=2*(length*breadth);
    document.getElementById("results").innerHTML+=`Perimeter of Rectangle: ${perimeterres}<br>`;
    area(length,breadth);
}





document.getElementById("form").addEventListener("submit",function(event){
    event.preventDefault();
    let num1=document.getElementById("length").value;
    let num2=document.getElementById("breadth").value;

    let number1 = num1 ? parseFloat(num1) : undefined;
    let number2 = num2 ? parseFloat(num2) : undefined;

    perimeter(number1,number2);
})