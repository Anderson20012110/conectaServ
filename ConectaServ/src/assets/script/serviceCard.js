
import { serviceProviders } from "./data/providers.js";

//Div onde vai carregar os cards
const cardContainer = document.getElementById('card-service');
let favorites = [];

// função para renderizar cards de serviços
function renderServices() {
    let htmlContent = '<div class="row g-4">';

    serviceProviders.forEach(provider => {
        
        // Verifica se é favorito
        const isFavorite = favorites.includes(provider.id);
        const favoriteIcon = isFavorite ? '<i class="fa-solid fa-heart-circle-check"></i>' : '<i class="fa-solid fa-heart"></i>' ;
        const activeClass = isFavorite ? "active" : "";

        // Renderiza o badge condicionalmente
        const badgeHtml = provider.badge 
            ? `<span class="service-badge">${provider.badge}</span>` 
            : "";

        
        htmlContent += `
            <div class="col-12 col-md-6 col-lg-4">
                <div class="service-card h-100"> <div style="position: relative;">
                        <img src="${provider.image}" alt="${provider.name}" class="service-image">
                        ${badgeHtml}
                    </div>
                    <div class="service-card-body">
                        <span class="service-category">${provider.category}</span>
                        <h3 class="service-name">${provider.name}</h3>
                        <p style="font-size: 0.9rem; color: var(--text-light); margin-bottom: 0.5rem;">
                            <i class="fa-solid fa-location-dot"></i> ${provider.location}
                        </p>
                        <p class="service-price">${provider.price}</p>
                        
                        <div class="service-rating">
                            <span class="rating-stars">⭐ ${provider.rating}</span>
                            <span class="rating-value">(${provider.reviews} avaliações)</span>
                        </div>
                        
                        <div class="service-actions mt-auto"> <button class="hire-btn" onclick="goToProfile(${provider.id})">Contratar</button>
                            <button class="favorite-btn ${activeClass}" onclick="toggleFavorite(${provider.id}, event)">
                                ${favoriteIcon}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });

    
    htmlContent += '</div>';

    cardContainer.innerHTML = htmlContent;
}

function toggleFavorite(id, event) {
    event.stopPropagation();
    
    if (favorites.includes(id)) {
        favorites = favorites.filter(favId => favId !== id);
    } else {
        favorites.push(id);
    }
    renderServices();
}

window.goToProfile = function (id) {
    window.location.href = `/src/pages/perfil.html?id=${id}`;
};

renderServices();