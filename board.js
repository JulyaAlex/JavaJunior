var $wrap = document.createElement("div");
$wrap.classList.add("wrap");

var $chessBoard = document.createElement("div");
$chessBoard.id = "chessBoard";
$chessBoard.classList.add("chessWrap");

var $digits = document.createElement("ul");
$digits.classList.add("right-colomn");

var $letters = document.createElement("ul");
$letters.classList.add("top-colomn");

for(var i = 0; i < 8; i++) { //цикл по строкам
    var $row = document.createElement("div"); //создаем строку - j, объявляем документ
    $row.classList.add("row"); // вешаем классы (css3) украшаем

    var $liDigit = document.createElement("li"); //создаем переменную li
    $liDigit.textContent = i + 1; // наполняем контент только для 1-ого ряда
    $digits.appendChild($liDigit);
    
    var $liLetters = document.createElement("li"); //создаем переменную li
    $liLetters.textContent = String.fromCharCode(65 + i); // или так же i + 1; // наполняем контент только для 1-ого ряда
    $letters.appendChild($liLetters);

    for(var j = 0; j < 8; j++) { //цикл по столбцам, объявляем документ
        var $cell = document.createElement("div"); //создаем ячейку
        $cell.classList.add("cell")  // вешаем классы (css3) украшаем
        
        $row.appendChild($cell); //добавляем ячейку в строку
    }

    $chessBoard.appendChild($row); //добавляем строку в таблицу
}

var $lettersBottom = $letters.cloneNode(true); // копируем переменную
$lettersBottom.classList.remove("top-colomn"); //удаляем класс (right-colomn)
$lettersBottom.classList.add("bottom-colomn"); //добавляем класс left-colomn


var $digitsLeft = $digits.cloneNode(true); // копируем переменную
$digitsLeft.classList.remove("right-colomn"); //удаляем класс (right-colomn)
$digitsLeft.classList.add("left-colomn"); //добавляем класс left-colomn


$wrap.appendChild($letters);
$wrap.appendChild($lettersBottom);
$wrap.appendChild($digits);
$wrap.appendChild($digitsLeft);
$wrap.appendChild($chessBoard); // добавляем таблицу в блок
document.body.appendChild($wrap);