const products = {
    plainBurger: {
        name: 'GAMBURGER',
        price: 10000,
        kcal: 350,
        amount: 0,
        get Kcal() {
            return this.kcal * this.amount
        },
        get Summ() {
            return this.price * this.amount
        }
    },
    freshBurger: {
        name: 'GAMBURGER FRESH',
        price: 20500,
        kcal: 450,
        amount: 0,
        get Kcal() {
            return this.kcal * this.amount
        },
        get Summ() {
            return this.price * this.amount
        }
    },
    freshCombo: {
        name: 'FRESH COMBO',
        price: 31900,
        kcal: 620,
        amount: 0,
        get Kcal() {
            return this.kcal * this.amount
        },
        get Summ() {
            return this.price * this.amount
        }
    }
}

const $btnPlusOrMinus = document.querySelectorAll('.main__product-btn'),
    $addCart = document.querySelector('.addCart'),
    $receipt = document.querySelector('.receipt'),
    $receiptWindow = document.querySelector('.receipt__window'),
    $receiptOut = document.querySelector('.receipt__window-out'),
    $receiptBtn = document.querySelector('.receipt__window-btn')

$btnPlusOrMinus.forEach(el => {
    el.addEventListener('click', e => {
        plusOrMinus(e.target)
    })
})

function plusOrMinus(btn) {
    const $parent = btn.closest('.main__product'),
        parentId = $parent.getAttribute('id'),
        $out = $parent.querySelector('.main__product-num'),
        $price = $parent.querySelector('.main__product-price span'),
        $kcal = $parent.querySelector('.main__product-kcall span'),
        dataSymbol = btn.getAttribute('data-symbol');
    if (dataSymbol === '+' && products[parentId].amount < 10) {
        products[parentId].amount++
    } else if (dataSymbol === '-' && products[parentId].amount > 0) {
        products[parentId].amount--
    }


    $out.innerHTML = products[parentId].amount
    $price.innerHTML = products[parentId].Summ
    $kcal.innerHTML = products[parentId].Kcal
}

    let arrayProducts = [],
        totalKcal = 0,
        totalPrice = 0,
        totalName = ''

$addCart.addEventListener('click',()=>{
    for(const key in products){
        const product = products[key]
        if (product.amount > 0) {
            arrayProducts.push(product)
        }
    }
    
    arrayProducts.forEach(productObj=>{
        totalKcal += productObj.Kcal
        totalPrice += productObj.Summ
        totalName += `\n${productObj.name}: X${productObj.amount} \n`
    })
    
    // console.log()
  
    $receipt.style.display = 'flex'
    
    setTimeout(() => {
        $receipt.style.opacity = '1'
    }, 100);
    
    setTimeout(() => {
        $receiptWindow.style.top = '20%'
    }, 200);
    document.body.style.overflow = 'hidden'
    $receiptOut.innerHTML = `Purchased: \n ${totalName} \nTotal calory: ${totalKcal} \nTotal price: ${totalPrice+9000}sum (Delivery + 9000)`
})
$receiptBtn.addEventListener('click',()=>location.reload())
// $receiptBtn.onclick = ()=>location.reload()

const timeExtra = document.querySelector('.header__timer-extra');

setInterval(() => {
    if (timeExtra.innerHTML < 15) {
        timeExtra.innerHTML++
    }
}, 50);
setInterval(() => {
    if (timeExtra.innerHTML < 30) {
        timeExtra.innerHTML++
    }
}, 100);
setInterval(() => {
    if (timeExtra.innerHTML < 50) {
        timeExtra.innerHTML++
    }
}, 150);
setInterval(() => {
    if (timeExtra.innerHTML < 70) {
        timeExtra.innerHTML++
    }
}, 200);
setInterval(() => {
    if (timeExtra.innerHTML < 90) {
        timeExtra.innerHTML++
    }
}, 250);
setInterval(() => {
    if (timeExtra.innerHTML < 100) {
        timeExtra.innerHTML++
    }
}, 300);



















