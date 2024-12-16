    let openShopping = document.querySelector('.shopping');
    let closeShopping = document.querySelector('.closeShopping');
    let list = document.querySelector('.list');
    let listCard = document.querySelector('.listCard');
    let body = document.querySelector('body');
    let total = document.querySelector('.total');
    let quantity = document.querySelector('.quantity');
    let container = document.querySelector('.main');

    openShopping.addEventListener('click', ()=>{
        body.classList.add('active');
    })
    closeShopping.addEventListener('click', ()=>{
        body.classList.remove('active');
    })

    let products = [
        {
            id: 1,
            name: 'Beef Fillet',
            image: 'Beef Fillet.jpg',
            price: 19.99
        },
        {
            id: 2,
            name: 'Braised Beef cheek',
            image: 'Braised Beef cheek.jpg',
            price: 22.99
        },
        {
            id: 3,
            name: 'Polvo lagarreiro',
            image: 'otto.jpg',
            price: 18.99
        },
        {
            id: 4,
            name: 'Lobster Scotch Egg',
            image: 'lobster.jpg',
            price: 9.99
        },
        {
            id: 5,
            name: 'Lobster Soul',
            image: 'soul.jpg',
            price: 49.99
        },
        {
            id: 6,
            name: 'Creamy Sun-dried Salmon',
            image: 'sal.jpg',
            price: 29.99
        },
    
    ];

    let dessert = [
        {
            id: 1,
            name: 'Beef Fillet',
            image: 'Beef Fillet.jpg',
            price: 19.99
        },
        {
            id: 2,
            name: 'Braised Beef cheek',
            image: 'Braised Beef cheek.jpg',
            price: 22.99
        },
        {
            id: 3,
            name: 'Polvo lagarreiro',
            image: 'otto.jpg',
            price: 18.99
        },
        {
            id: 4,
            name: 'Lobster Scotch Egg',
            image: 'lobster.jpg',
            price: 9.99
        },
        {
            id: 5,
            name: 'Lobster Soul',
            image: 'soul.jpg',
            price: 49.99
        },
        {
            id: 6,
            name: 'Creamy Sun-dried Salmon',
            image: 'sal.jpg',
            price: 29.99
        },
    
    ];

    let listCards  = [];
    function initApp(){
        products.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">$ ${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Cart</button>`;
            list.appendChild(newDiv);
        })
    }
    initApp();

    function initApp1(){
        dessert.forEach((value, key) =>{
            let newDiv = document.createElement('div');
            newDiv.classList.add('item');
            newDiv.innerHTML = `
                <img src="${value.image}">
                <div class="title">${value.name}</div>
                <div class="price">$ ${value.price.toLocaleString()}</div>
                <button onclick="addToCard(${key})">Add To Cart</button>`;
            list.appendChild(newDiv);
        })
    }
initApp1();
    function addToCard(key){
        if(listCards[key] == null){
            // copy product form list to list card
            listCards[key] = JSON.parse(JSON.stringify(products[key]));
            listCards[key].quantity = 1;
        }
        reloadCard();
    }
    function reloadCard(){
        listCard.innerHTML = '';
        let count = 0;
        let totalPrice = 0;
        listCards.forEach((value, key)=>{
            totalPrice = totalPrice + value.price;
            count = count + value.quantity;
            if(value != null){
                let newDiv = document.createElement('li');
                newDiv.innerHTML = `
                    <div><img src="${value.image}"/></div>
                    <div>${value.name}</div>
                    <div>$ ${value.price.toLocaleString()}</div>
                    <div>
                        <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                        <div class="count">${value.quantity}</div>
                        <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                    </div>`;
                    listCard.appendChild(newDiv);
            }
        })
        total.innerHTML = `<p>$ ${totalPrice.toLocaleString()}</p>`;
        quantity.innerText = count;
    }
    function changeQuantity(key, quantity){
        if(quantity == 0){
            delete listCards[key];
        }else{
            listCards[key].quantity = quantity;
            listCards[key].price = quantity * products[key].price;
        }
        reloadCard();
    }
    

