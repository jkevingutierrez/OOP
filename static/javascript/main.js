/* jshint esversion: 6 */
$(function() {
    'use strict';

    const jqxhr = $.get("/operators")
        .done(function(response) {
            console.log(response);
            const operators = response.operators;
            const operatorSelect = document.getElementById('operator');

            for (let operator of operators) {
                const option = document.createElement('option');
                option.text = operator;
                option.value = operator;
                operatorSelect.options.add(option);
            }
        })
        .fail(function(error) {
            console.error(error);
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
                if ( Number.isNaN(Number(result))) {
                    $('#operation').html(result);
                } else {
                    $('#operation').html(data.left + ' ' + transformarOperador(data.operator) + ' ' + data.right + ' = ');
                    $('#result').html(result);
                }
            })
            .fail(function(error) {
                console.error(error);
            });
    });

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
