const product = [
  {  id: 1 ,
    image: 'hibs.jpg',
    title: 'Hibiscus',
    price:'$9',
},
{  id: 2 ,
    image: 'lotus.jpg',
    title: 'Fresh water Lotus',
    price:'$33',
},
{  id: 3 ,
    image: 'Bamboo.jpg',
    title: 'Bamboo',
    price:'$90',
},
{  id: 4 ,
    image: 'Pinkrose.jpg',
    title: 'Rose',
    price:'$4',
},
{  id: 5 ,
    image: 'https://i.pinimg.com/originals/b0/1d/22/b01d22c5af58a6e2196db5d419a7f296.jpg',
    title: 'Yellow Hibiscus ',
    price:'$15',
},
{  id: 6 ,
    image: 'https://th.bing.com/th/id/R.67a289663804bb90592a21a01f7cc7b9?rik=u82EmIYHeirGMw&riu=http%3a%2f%2f2.bp.blogspot.com%2f-iMl0qSXSBZY%2fVd1fBMgwBAI%2fAAAAAAAAFhw%2ffF7HrordvbU%2fs1600%2ffree-photo-cactus-223.jpg&ehk=06CSPuB%2bhmMBk2GYjgLwhnTcmxMV2sb6I%2fp%2bdHHTXzY%3d&risl=&pid=ImgRaw&r=0',
    title: 'Cactus',
    price:'$6',
},
{  id: 7 ,
    image: 'https://th.bing.com/th/id/OIP.sK8S4QQ4etpziEZBwKJpBAHaIG?pid=ImgDet&rs=1',
    title: 'plant7',
    price:'$10',
},
{  id: 8 ,
    image: 'https://homesfornh.com/wp-content/uploads/2020/12/f-ornamental-plant-2048x1367.jpg',
    title: 'plant8',
    price:'$8',
},
{  id: 9 ,
    image: 'https://i.pinimg.com/originals/02/44/09/0244091b32b048107fb95e98793eb989.jpg',
    title: 'plant9',
    price:'$5.25',
},
{  id: 10 ,
    image: 'https://s-media-cache-ak0.pinimg.com/originals/be/31/f2/be31f2050e3f01e1ba04437a23f016d1.jpg',
    title: 'plan10',
    price:'$50',
},
]
const categories = [...new Set(product.map((item)=>{return item}))]
let Cart = document.getElementById('root')
Cart.innerHTML= categories.map((item)=>
{
    var{image,title,price}=item;
    return(
        `<div class="box">
        <div class="img-box">
        <img src=${image}></img>
        </div>
        <div class="left">
        <p>${title}</p>
        <h2>${price}</h2>
        <button>Add To Cart</button>
        </div>
        </div>
        `
    )
}).join('')
