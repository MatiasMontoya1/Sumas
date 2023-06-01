  function sumar() {
      
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    
    num1 = parseInt(num1);
    num2 = parseInt(num2);
    
    var resultado = num1 + num2;
    document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
    }
    function restar() {
      
        var num1 = document.getElementById('numero1').value;
        var num2 = document.getElementById('numero2').value;
        
        num1 = parseInt(num1);
        num2 = parseInt(num2);
        
        var resultado = num1 - num2;
        document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
        }
        function dividir() {
      
            var num1 = document.getElementById('numero1').value;
            var num2 = document.getElementById('numero2').value;
            
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            
            var resultado = num1 / num2;
            document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
            }
            function multiplicar() {
      
                var num1 = document.getElementById('numero1').value;
                var num2 = document.getElementById('numero2').value;
                
                num1 = parseInt(num1);
                num2 = parseInt(num2);
                
                var resultado = num1 * num2;
                document.getElementById('resultado').textContent = 'El resultado es: ' + resultado;
                }