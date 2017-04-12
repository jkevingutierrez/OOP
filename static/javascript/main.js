/* jshint esversion: 6 */
$(function() {
    'use strict';

    let allOperators = [];
    const operatorSelect = document.getElementById('operator');
    
    const jqxhr = $.get("/operators")
        .done(function(response) {
            console.log(response);
            allOperators = response.operators;

            const operators = allOperators.filter(function(operator) {
                return operator !== 'Potenciacion' && operator !== 'Raiz';
            })

            addOperators(operators);
        })
        .fail(function(error) {
            console.error(error);
        });


     $('input[type=radio]').change(function(event) {
         let operators = [];
         
        if (this.value == 'basic') {
            operators = allOperators.filter(function(operator) {
                return operator !== 'Potenciacion' && operator !== 'Raiz';
            })
        } else if (this.value == 'advanced') {
           operators = allOperators.slice()
        }

        addOperators(operators);
    });

    $('form').submit(function(event) {
        // stop the form from submitting the normal way and refreshing the page
        event.preventDefault();

        // get the form data
        // there are many ways to get this data using jQuery (you can use the class or id also)
        var data = {
            'left': $('input[name=left]').val(),
            'right': $('input[name=right]').val(),
            'operator': $('select[name=operator]').val(),
            'type': $('input[name=calculator]:checked').val()
        };

        console.log(data);

        // process the form
        $.ajax({
                type: 'POST',
                url: '/operate',
                data: JSON.stringify(data),
                contentType: 'application/json'
            })
            .done(function(response) {
                console.log(response);
                var result = response.result;
                var resultContainer = $('.result-container').show();
                if (!result && result !== 0) {
                     $('#operation').html('Operación invalida');
                     $('#result').html('');
                } else if (Number.isNaN(Number(result))) {
                    $('#operation').html(result);
                    $('#result').html('');
                } else {
                    $('#operation').html(data.left + ' ' + transformarOperador(data.operator) + ' ' + data.right + ' = ');
                    $('#result').html(Number(result).toPrecision(2));
                }
            })
            .fail(function(error) {
                console.error(error);
            });
    });

    function addOperators(operators) {
         while (operatorSelect.options.length > 1) {
            operatorSelect.options.remove(operatorSelect.options.length - 1);
        }

        for (let operator of operators) {
            const option = document.createElement('option');
            option.text = operator;
            option.value = operator;
            operatorSelect.options.add(option);
        }
    }

    function transformarOperador(operador) {
        var texto = '';
        switch(operador) {
            case 'Division':
                texto = '/';
                break;
            case 'Multiplicacion':
                texto = '*';
                break;
             case 'Potenciacion':
                texto = 'a la';
                break;
            case 'Raiz':
                texto = 'Raiz';
                break;
            case 'Resta':
                texto = '-';
                break;
            case 'Suma':
                texto = '+';
                break;
            default:
                console.error('Operador Invalido');
                break;
        }

        return texto;
    }

});
