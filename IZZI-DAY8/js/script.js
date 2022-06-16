const logo = document.getElementById("logo");
const pictures = document.getElementById("pictures");
const photoHolder = document.getElementById("photoHolder");
const bigImage = document.createElement("img");
const productInfo = document.getElementById("productInfo");
photoHolder.appendChild(bigImage);

const data = {
  logoLink:
    "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.nhanlucnganhluat.vn%2Fuploads%2Fimages%2F5E007FE3%2Flogo%2F2020-02%2FLOGO%2520chuan.jpg&f=1&nofb=1",
  pictureLinks: [
    "https://cdn.shopify.com/s/files/1/0278/9723/3501/products/dd51683b175fcdb080450eaceb5de5bc79930cd8-1000x1000_d3580497-f46b-4ad1-bb7f-f3a56ba9477d_1000x.jpg?v=1653076334",
    "https://cdn.shopify.com/s/files/1/0278/9723/3501/products/d195c3eeee8e0e9f59a894d934b6377f5d85001e-1000x1000_c609788f-a755-4250-bbf1-d82ef3e2d24d_1000x.jpg?v=1653076334",
    "https://cdn.shopify.com/s/files/1/0278/9723/3501/products/a9ba5c1fd5d4f09eb8735ccf208d8bb31e0ec19b-1000x1000_f16081e0-1e3c-4cb7-a5ab-0c2e89cdbcb2_1000x.jpg?v=1653076334",
  ],
  brand: "Junghans",
  model: "Max Bill Chronoscope",
  rating: 4,
  price: "$2,300",
  description:
    "Out of all the watches I own, this watch has received the most questions out of any watch I have featured on the channel. Looking around on the internet, I noticed there really was no review of this watch to be found. So, here is my take on the Junghans Max Bill Chronoscope.",
};

const logoImg = document.createElement("img");
logoImg.setAttribute("src", `${data.logoLink}`);
logo.appendChild(logoImg);

data.pictureLinks.forEach((image) => {
  const galleryPic = document.createElement("img");
  galleryPic.setAttribute("src", `${image}`);
  pictures.appendChild(galleryPic);
  galleryPic.addEventListener("click", () => {
    displayImage(galleryPic);
  });
});

bigImage.setAttribute("src", `${data.pictureLinks[0]}`);

function displayImage(galleryPic) {
  bigImage.setAttribute("src", `${galleryPic.src}`);
}

const brandName = document.createElement("h2");
brandName.innerText = data.brand;
productInfo.appendChild(brandName);
const modelName = document.createElement("h3");
modelName.innerText = data.model;
productInfo.appendChild(modelName);
const star = document.createElement('i')
star.setAttribute('class', 'fa-solid fa-star')
const ratingStars = document.createElement('div')
// for(let i = 0; i < data.rating; i++){
//     ratingStars.appendChild(star)
// }
// ratingStars.appendChild(star.repeat(data.rating))

console.log(ratingStars)
productInfo.appendChild(ratingStars)
const productPrice = document.createElement('h3')
productPrice.innerText = `Price: ${data.price}`
productInfo.appendChild(productPrice)
const productDesc = document.createElement('p')
productDesc.innerText = data.description
productInfo.appendChild(productDesc)
const btnDiv = document.createElement('div')
btnDiv.setAttribute('id', 'btnDiv')
const addToCart = document.createElement('button')
addToCart.innerText = 'Add to cart'
addToCart.setAttribute('class', 'btn')
btnDiv.appendChild(addToCart)
const buyNow = document.createElement('button')
buyNow.innerText = 'Buy now'
buyNow.setAttribute('class', 'btn')
btnDiv.appendChild(buyNow)
productInfo.appendChild(btnDiv)
