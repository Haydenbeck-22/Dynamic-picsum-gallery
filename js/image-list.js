const picsumAnimals = [
  {
    id: 237,
    title: "Puppy",
    src: "237.jpg",
    link: "https://i.picsum.photos/id/237/500/500.jpg?hmac=idOEkrJhLd7nEU5pNrAGCyJ6HHJdR_sit1qDt5J3Wo0",
  },
  {
    id: 433,
    title: "Bear",
    src: "433.jpg",
    link: "https://i.picsum.photos/id/433/1000/1000.jpg?hmac=CM_56OBbdKMAQACgcVkYZhmloQd9SVYt2GUjdex0SbQ",
  },
  {
    id: 577,
    title: "Moose",
    src: "577.jpg",
    link: "https://i.picsum.photos/id/577/1000/1000.jpg?hmac=QD4pdTTAIu1Hcmn6ZwhWVlXRkCIBqJqQxlKsLs8KMjo",
  },
  {
    id: 582,
    title: "Coyote",
    src: "582.jpg",
    link: "https://i.picsum.photos/id/582/1000/1000.jpg?hmac=y3tjEktip9liZNTfQp4IsuLdMs2UXA1WXRUNWtcqAKI",
  },
  {
    id: 593,
    title: "Tiger",
    src: "593.jpg",
    link: "https://i.picsum.photos/id/593/1000/1000.jpg?hmac=FUwrNbJL72QiUKxsB-zWTpyO1IsxriIDkxuEuactsWE",
  },
  {
    id: 659,
    title: "Husky",
    src: "659.jpg",
    link: "https://i.picsum.photos/id/659/1000/1000.jpg?hmac=IwK7_QxqXmRII-l9YWSz31bcBEEShXQe3KICjYzf6Qc",
  },
  {
    id: 718,
    title: "Wolf",
    src: "718.jpg",
    link: "https://i.picsum.photos/id/718/1000/1000.jpg?hmac=tsppCERwSxywBVchjacp-bDAxIoCFv7YvkmgM8_pJdY",
  },
  {
    id: 783,
    title: "Monkey",
    src: "783.jpg",
    link: "https://i.picsum.photos/id/783/1000/1000.jpg?hmac=jihuaNiO2-IWXOlgMBfP2T0Mh7By5mtlgtAdns_sjhk",
  },
  {
    id: 790,
    title: "Elk",
    src: "790.jpg",
    link: "https://i.picsum.photos/id/790/1000/1000.jpg?hmac=6902dHGN4TahOOzSoiYt6-4IlQbxqtIg8b7RETOtAko",
  },
  {
    id: 837,
    title: "Bulldog",
    src: "837.jpg",
    link: "https://i.picsum.photos/id/837/1000/1000.jpg?hmac=r9AdS4HSgod06NJEbYW7ZPGcfoGpx8moZlwe8op_Das",
  },
  {
    id: 1024,
    title: "Bird",
    src: "1024.jpg",
    link: "https://i.picsum.photos/id/1024/1000/1000.jpg?hmac=g9wdL64ZjLEC27U4SZCZXsw-06aZ2ap1dvY9bv_Uoyw",
  },
  {
    id: 1025,
    title: "Pug",
    src: "1025.jpg",
    link: "https://i.picsum.photos/id/1025/1000/1000.jpg?hmac=rXZ8FVIG2Nx1k0UJCMchDeaa7Qjriuvy8iC2dp6CpKo",
  },
  {
    id: 1074,
    title: "Big Cat",
    src: "1074.jpg",
    link: "https://i.picsum.photos/id/1074/1000/1000.jpg?hmac=MT7o-7j4RFvtHMIlOYeEnlnQ1iAzSxTcW_3be7hqQxY",
  },
  {
    id: 1084,
    title: "chillin Walrus",
    src: "1084.jpg",
    link: "https://i.picsum.photos/id/1084/1000/1000.jpg?hmac=msVkdqAvXtX8TTm-bhanDB-0JlUU1K4Q9SLqC_0epjU",
  },
];

let output = "";

picsumAnimals.forEach(function (imageId) {
  output += 

`<a href="${imageId.link}">   
<img src="Assets/${imageId.src}" alt="${imageId.title}">
</a>`



});

const gallery = document.querySelector(".gallery");
gallery.innerHTML = output;

