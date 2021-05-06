$(document).ready(function(){

    $('#btn').on('click', function(){

        let note1 = $('#number1').val();
        let note2 = $('#number2').val();
        let note3 = $('#number3').val();
        let note4 = $('#number4').val();
        let note5 = $('#number5').val();

        if(note1 && note2 && note3 && note4 && note5 && note1 <= 20 && note2 <= 20 && note3 <= 20 && note4 <= 20 && note5 <= 20){
            var moyenne = (parseFloat(note1) + parseFloat(note2) + parseFloat(note3) + parseFloat(note4) + parseFloat(note5))/5;
            alert('La moyenne est de ' + moyenne);
        } else if(note1 > 20 || note2 > 20 || note3 > 20 || note4 > 20 || note5 > 20){
            alert("Non t'as raté un truc là!");
        }else {
            alert('Remplis tout les champs là!!');
        }
        
    })
})

        // let summ = 0
        // let result = 0;
        // $('.number').each(function(){
        //     summ += parseInt($(this).val());
        // })
        // result = summ / $('.number').length;
        // console.log(summ);
        // alert('La moyenne est de ' + result + ' / 20');
        // console.log($('.number').length);