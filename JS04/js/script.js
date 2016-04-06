var mainPage = {
    createDiv: function() {
        var elementDiv = document.createElement('div');
        return elementDiv;
    },
    createH1: function() {
        var elementH1 = document.createElement('h1');
        return elementH1;
    },
    createForm: function() {
        var elementForm = document.createElement('form');
        return elementForm;
    },
     createInput: function() {
        var elementInput = document.createElement('input');
        return elementInput;
    },
    createP: function() {
        var elementP = document.createElement('p');
        return elementP;
    },
    createLabel: function() {
        var elementLabel = document.createElement('label');
        return elementLabel;
    },
    createLabelText: function() {
        var elementLabelText = document.createElement('labelText');
        return elementLabelText;
    },
    createBr: function() {
        var elementBr = document.createElement('br');
        return elementBr;
     },
    createButton: function() {
        var elementButton = document.createElement('submit');
        return elementButton;
    }
    
}
var mainDiv = mainPage.createDiv();
mainDiv.classList.add('MainWrapper');

var body = document.querySelector('body');
body.appendChild(mainDiv);

var mainH1 = mainPage.createH1();
mainH1.innerHTML = 'Тест по программированию';
mainH1.classList.add('mainH1');
mainDiv.appendChild(mainH1);

var mainForm = mainPage.createForm();
mainForm.setAttribute('name','TestForm');
mainForm.classList.add('mainForm');
mainDiv.appendChild(mainForm);

for (var j = 1; j<=3; j++){
    var pInForm = mainPage.createP();
    pInForm.innerHTML = j + '. Вопрос №' + j;
    pInForm.classList.add('pInForm');
    mainForm.appendChild(pInForm);

    for (var i = 1; i<=3; i++) {
        var labelForm = mainPage.createLabel();
        mainForm.appendChild(labelForm);

        var inputForm = mainPage.createInput();
        inputForm.setAttribute('type','checkbox');
        inputForm.setAttribute('name','question'+i);
        inputForm.setAttribute('value', i);
        inputForm.classList.add('checkbox');
        labelForm.appendChild(inputForm);

        var textLabel = mainPage.createLabelText();
        textLabel.classList.add('textLabel');
        labelForm.appendChild(textLabel);
        textLabel.innerHTML = 'Вариант ответа №' + i;
        
        //mainForm.appendChild(labelForm);

        var brTag = mainPage.createBr();
        mainForm.appendChild(brTag);
    }
}

var brTag = mainPage.createBr();
mainForm.appendChild(brTag);

var btnForm = mainPage.createInput();
btnForm.setAttribute('type', 'submit');
btnForm.setAttribute('value', 'Проверить мои результаты');
btnForm.classList.add('btnForm');
mainForm.appendChild(btnForm);
