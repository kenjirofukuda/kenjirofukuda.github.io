const ul = document.getElementById("sample_list")
if (sample_list !== null) {
    ['item1', 'item2', 'item3', 'item4'].forEach(function (each) {
        const item = document.createElement('li');
        item.textContent = each
        ul.appendChild(item)
    });
}

function appendDate() {
    const ul = document.getElementById("sample_list")
    const item = document.createElement('li');
    item.textContent = new Date().toISOString()
    ul.appendChild(item)
}
