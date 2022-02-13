const menu = [{
        id: 1,
        title: "Channa Dal",
        category: "Lunch",
        price: 50,
        img: "./images/channa-dal.jpg",
        desc: `Channa Dal Is Our Speciality`,
    },
    {
        id: 2,
        title: "Dal Makhani",
        category: "lunch",
        price: 80,
        img: "./images/maa-dal.jpg",
        desc: `Every Punjabi Favourite Daal is Daal Makhani `,
    },
    {
        id: 3,
        title: "Aloo Matar",
        category: "Lunch",
        price: 50,
        img: "./images/aloo-matar.jpg",
        desc: `Aloo Matar is a Punjabi Dish  .`,
    },
    {
        id: 4,
        title: "Kale Channe",
        category: "Lunch",
        price: 50,
        img: "./images/kale-channe.jpg",
        desc: `Kale Channe Tadka Is Amazing `,
    },
    {
        id: 5,
        title: "Lasha Pratha",
        category: "lunch",
        price: 30,
        img: "./images/lasha-pratha.jpg",
        desc: `Lasha Pratha With Daal is Best Combo `,
    },
    {
        id: 6,
        title: "Tandoori Roti",
        category: "Lunch",
        price: 5,
        img: "./images/tandoori-roti.jpg",
        desc: `Tandoori Roti With Makhan Ahhhaaa!!`,
    },
    {
        id: 7,
        title: "Kari Pakoda",
        category: "Lunch",
        price: 50,
        img: "./images/kari-pakoda.jpg",
        desc: `Kari Pakoda Is Second Favourite Punjabi Dish `,
    },
    {
        id: 8,
        title: "Masala Nutri Soya Chunks",
        category: "lunch",
        price: 50,
        img: "./images/MasalaNutriSoyaChunks.jpg",
        desc: `Masala Nutri Soya Chunks   `,
    },
    {
        id: 9,
        title: "Paneer Burji",
        category: "lunch",
        price: 120,
        img: "./images/Paneer-Bhurji.jpg",
        desc: `Paneer Bhurji Is Everyone Favourite Dish.`,
    },
    {
        id: 10,
        title: "Aloo Gobi",
        category: "lunch",
        price: 50,
        img: "./images/aloo-gobi.jpg",
        desc: `Aloo Gobi with Tandoori Roti Ahaa!!.`,
    },
];


const sectionCenter = document.querySelector('.section-center');

displayItem(menu);

function displayItem(menuItem) {
    let displayItem = menuItem.map(function(item) {
        //console.log(item)
        return `<article class="menu-item">
        <img src=${item.img} class="photo" />
        <div class="item-info">
            <header>
                <h4>${item.title}</h4>
                <h4 class="price">Rs.${item.price}</h4>
            </header>
            <p class="item-text">
                ${item.desc}
            </p>
        </div>
        </article>`;
    })

    displayItem = displayItem.join("");
    sectionCenter.innerHTML = displayItem;

}