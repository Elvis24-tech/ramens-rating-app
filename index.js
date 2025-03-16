const ramens = [
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYEgGOG8fkJ5NAQGu45oHruqnQw3emkIFLBw&s',
        name: 'Shoyu Ramen',
        restaurant: 'Mother Becky Kitchen',
        rating: 5,
        comment: 'Yummy and delicious!'
    },
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNVvJ6zTa_uY6SaFnFmpwG9FSLckfR9Zwi4g&s',
        name: 'Miso Ramen',
        restaurant: 'Nashlu Base',
        rating: 4.5,
        comment: 'Tasty and fingerlicking!'
    },
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOaA4mYRXsIbN5qC-_AZfzBU6MQradLESWw&s',
        name: 'Tonkotsu Ramen',
        restaurant: 'Eat and Dip',
        rating: 3,
        comment: 'Juicy and Tasty!'
    }
];

function displayRamens() {
    const ramenMenu = document.getElementById('ramen-menu');
    ramens.forEach(ramen => {
        const ramenImage = document.createElement('img');
        ramenImage.src = ramen.imgUrl;
        ramenImage.alt = ramen.name;
        ramenImage.addEventListener('click', () => handleClick(ramen));
        ramenMenu.appendChild(ramenImage);
    });
}

function handleClick(ramen) {
    const ramenDetail = document.getElementById('ramen-detail');
    document.getElementById('ramen-name').textContent = ramen.name;
    document.getElementById('ramen-restaurant').textContent = `Restaurant: ${ramen.restaurant}`;
    document.getElementById('ramen-rating').textContent = `Rating: ${ramen.rating}`;
    document.getElementById('ramen-comment').textContent = `Comment: ${ramen.comment}`;
}

function addSubmitListener() {
    const form = document.getElementById('ramen-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const imgUrl = document.getElementById('image-url').value;
        const name = document.getElementById('ramen-name-input').value;
        const restaurant = document.getElementById('ramen-restaurant-input').value;
        const rating = document.getElementById('ramen-rating-input').value;
        const comment = document.getElementById('ramen-comment-input').value;

        const newRamen = {
            imgUrl,
            name,
            restaurant,
            rating: rating || 5,
            comment
        };

        ramens.push(newRamen);
        const ramenMenu = document.getElementById('ramen-menu');
        const ramenImage = document.createElement('img');
        ramenImage.src = newRamen.imgUrl;
        ramenImage.alt = newRamen.name;
        ramenImage.addEventListener('click', () => handleClick(newRamen));
        ramenMenu.appendChild(ramenImage);
        
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}

document.addEventListener('DOMContentLoaded', main);