alert("Olá, mundo!");
{
    var x = 10;
    console.log(x);
    var y = "Nome da pessoa";
    console.log(y);

    console.log(typeof(x))
    console.log(typeof(y))

    let z = 3.1235;
    console.log(z);
    const h = 3 + "10";
    console.log(h);
}
{
    function soma(x, y) {
        return x + y;
    }
    console.log(soma(2, 8));

    const x = (x, y) => x ** y;

    console.log(x(10, 2));

    function facaAlgo(f) {
        return f(2,3);
    }
    console.log(facaAlgo(x))
}
{
    var b = document.getElementById('btn')
    const c = () => console.log('Oi') + alert("Oi");
    b.addEventListener('click', c)
}


