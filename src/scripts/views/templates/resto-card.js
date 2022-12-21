import CONFIG from '../../global/config';

const restoCard = (resto) => `
<div tabindex="0" class="card">
<a href="#/resto/${resto.id}" class="card-a-tag">
<div class="list_item">
<img class="list_item_thumb" src="${CONFIG.BASE_IMAGE_URL + resto.pictureId}" alt="${resto.name}" title="${resto.name}">
<div class="list_item_content">
    <p class="list_item_rating">
    Rating : 
    <p class="list_item_rating_value">${resto.rating}</p>
    </p>
    <p class="city">${resto.city}</p>
    <h1 class="list_item_title">${resto.name}</h1>
    <div class="list_item_desc">${resto.description.slice(0, 150)}...</div>
</div>
</div>
</a>
</div>
`;

export default restoCard;
