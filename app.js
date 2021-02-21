// Global vars
const form = document.querySelector('#item-form');
const itemList = document.querySelector('#item-collection');
const quantList = document.querySelector('#quant-collection');
const brandList = document.querySelector('#brand-collection');
const clearBtn = document.querySelector('#clear-items');
const filter = document.querySelector('#filter');
const itemInput = document.querySelector('#item');
const quantInput = document.querySelector('#quant');
const brandInput = document.querySelector('#brand');

// Load all event listerners
loadEventListerners();

// Events
function loadEventListerners() {
    // add item
    form.addEventListener('submit', addItem);
    // add quantity
    form.addEventListener('submit', addQuant);
    // add brand
    form.addEventListener('submit', addBrand);
    // remove item
    itemList.addEventListener('click', removeItem);
}

// Add Item
function addItem(e) {
    if (itemInput.value === '') {
        alert('Place an item in!')
    }

    // create li
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item list-group-item-primary d-flex justify-content-around';
    // append to li & create text node 
    li.appendChild(document.createTextNode(itemInput.value));
    // create element a
    const linkEd = document.createElement('a');
    // add class
    linkEd.className = 'edit';
    // add href
    const attEd = document.createAttribute('href');
    // add value
    attEd.value = '#';
    // apend att to link
    linkEd.setAttributeNode(attEd);
    // add icon
    linkEd.innerHTML = '<i class="far fa-edit"></i>';
    // append link to li
    li.appendChild(linkEd);
    // create a element
    const linkTra = document.createElement('a');
    // add class 
    linkTra.className = 'delete';
    // add href
    const attTra = document.createAttribute('href');
    // add value
    attTra.value = '#';
    // apend att to link
    linkTra.setAttributeNode(attTra);
    // add icon
    linkTra.innerHTML = '<i class="far fa-trash-alt"></i>';
    // append li
    li.appendChild(linkTra);
    // append li to itemlist
    itemList.appendChild(li);

    // Clear input
    itemInput.value = '',

        e.preventDefault();

}

// Remove Item
function removeItem(e) {
    console.log(e.target.parentElement.parentElement.remove());
}



// Add Quantity
function addQuant(e) {
    if (quantInput.value === '') {
        alert('Place a quantity in!')
    }

    // create li
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item list-group-item-info d-flex justify-content-around';
    // append to li & create text node 
    li.appendChild(document.createTextNode(quantInput.value));
    // create element a
    const linkEd = document.createElement('a');
    // add class
    linkEd.className = 'edit';
    // add href
    const attEd = document.createAttribute('href');
    // add value
    attEd.value = '#';
    // apend att to link
    linkEd.setAttributeNode(attEd);
    // add icon
    linkEd.innerHTML = '<i class="far fa-edit"></i>';
    // append link to li
    li.appendChild(linkEd);
    // create a element
    const linkTra = document.createElement('a');
    // add class 
    linkTra.className = 'delete';
    // add href
    const attTra = document.createAttribute('href');
    // add value
    attTra.value = '#';
    // apend att to link
    linkTra.setAttributeNode(attTra);
    // add icon
    linkTra.innerHTML = '<i class="far fa-trash-alt"></i>';
    // append li
    li.appendChild(linkTra);
    // append li to itemlist
    quantList.appendChild(li);

    // Clear input
    quantInput.value = '',

        e.preventDefault();

}

// Add Brand

function addBrand(e) {
    if (brandInput.value === '') {
        alert('Place a Brand in!')
    }

    // create li
    const li = document.createElement('li');
    // add class
    li.className = 'list-group-item list-group-item-success d-flex justify-content-around';
    // append to li & create text node 
    li.appendChild(document.createTextNode(brandInput.value));
    // create element a
    const linkEd = document.createElement('a');
    // add class
    linkEd.className = 'edit';
    // add href
    const attEd = document.createAttribute('href');
    // add value
    attEd.value = '#';
    // apend att to link
    linkEd.setAttributeNode(attEd);
    // add icon
    linkEd.innerHTML = '<i class="far fa-edit"></i>';
    // append link to li
    li.appendChild(linkEd);
    // create a element
    const linkTra = document.createElement('a');
    // add class 
    linkTra.className = 'delete';
    // add href
    const attTra = document.createAttribute('href');
    // add value
    attTra.value = '#';
    // apend att to link
    linkTra.setAttributeNode(attTra);
    // add icon
    linkTra.innerHTML = '<i class="far fa-trash-alt"></i>';
    // append li
    li.appendChild(linkTra);
    // append li to itemlist
    brandList.appendChild(li);

    // Clear input
    brandInput.value = '',

        e.preventDefault();

}

