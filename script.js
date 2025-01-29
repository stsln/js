function convertToForm()
{
    var pClass = document.querySelectorAll('body p.paragraph');

    var text;

    for (var i = 0; i < pClass.length; i++)
    {
        text = pClass[i].textContent.split(".")[1].trim();
        pClass[i].outerHTML = `<p class='editParagraph'>Абзац № ${ i + 1 }
                              <input type='text' value='${ text }'>
                              <button type='button' onclick='removeFormElement(this)'>Удалить</button>`;
    }

    var add = document.querySelector("body");
    var toolsDiv = document.createElement('div');
    toolsDiv.setAttribute("class", "toolsD");
    toolsDiv.setAttribute("style", "display: flex; gap: 5px; margin: 8px");

    var btnAdd = document.createElement('button');
    btnAdd.textContent = "Добавить";
    btnAdd.type = "button";
    btnAdd.setAttribute("onclick", "addFormElement()");

    var btnSave = document.createElement('button');
    btnSave.textContent = "Сохранить";
    btnSave.type = "button";
    btnSave.setAttribute("onclick", "saveElements()");

    toolsDiv.appendChild(btnAdd);
    toolsDiv.appendChild(btnSave);

    add.parentElement.appendChild(toolsDiv);
}

function removeFormElement(btn)
{
    btn.parentElement.remove();
}

function addFormElement()
{
    var pClassNum = document.querySelectorAll('body p.editParagraph').length + 1;

    var newP = document.createElement('p');
    newP.innerHTML = `<p class='editParagraph'>Абзац № ${ pClassNum }
                     <input type='text' value=''>
                     <button type='button' onclick='removeFormElement(this)'>Удалить</button>`;

    var bodyQ = document.querySelector('body');
    bodyQ.appendChild(newP);
}

function saveElements()
{
    var divTools = document.querySelector("body");
    divTools.parentElement.lastElementChild.remove();

    var pClass = document.querySelectorAll('body p.editParagraph');

    for (var i = 0; i < pClass.length; i++)
    {
        text = pClass[i].querySelector("input").value;
        pClass[i].outerHTML = `<p class='paragraph' onclick='convertToForm(this)'>${ i + 1 }. ${ text }`;
    }
}
