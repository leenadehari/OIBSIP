const calculatetemp = () =>{
    const inputtemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('type');

    const valuetemp = type.options[tempSelected.selectedIndex].value;

    // celsius to fahrenheit
    const celToFah = (cel) =>{
        let fahrenheit = ((cel * 9/5) + 32).toFixed(1);
        return fahrenheit;
    }

    // fahrenheit to celsius
    const FahTocel = (fah) =>{
        let celsius = ((fah - 32) * 5/9).toFixed(1);
        return celsius;
    }
    if(valuetemp == 'cel'){
        document.getElementById("result").innerHTML = celToFah(inputtemp) + "&#176; fahrenheit";
    }else{
        document.getElementById("result").innerHTML = FahTocel(inputtemp) + "&#176; celsius";

    }
}