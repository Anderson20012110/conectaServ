
import { serviceProviders } from "./data/providers.js";
console.log("Providers:", serviceProviders);

document.addEventListener('DOMContentLoaded', () => {
   
    const params = new URLSearchParams(window.location.search);
    const providerId = params.get('id');

    //Procura o profissional no array
    const provider = serviceProviders.find(p => p.id == providerId);

    if (provider) {
        // Cabeçalho
        document.getElementById('p-image').src = provider.image;
        document.getElementById('p-name').innerText = provider.name;
        document.getElementById('p-category').innerText = provider.category;
        document.getElementById('p-rating').innerText = provider.rating;
        document.getElementById('p-reviews').innerText = `(${provider.reviews} avaliações)`;

        // Badges
        const badgesContainer = document.getElementById('p-badges');
        if (provider.badge) {
            badgesContainer.innerHTML = `<span class="badge-custom badge-featured">${provider.badge}</span>`;
        }
        // Badges extras estáticos
        badgesContainer.innerHTML += `
            <span class="badge-custom">Atende a Domicílio</span>
            <span class="badge-custom">Orçamento Grátis</span>
        `;

        // Detalhes
        document.getElementById('p-description').innerText = provider.description;
        document.getElementById('p-location').innerText = provider.location;
        document.getElementById('p-price').innerText = provider.price;

        // Lista de Serviços (se não tiver no array, cria uma genérica)
        const servicesList = document.getElementById('p-services-list');
        const services = provider.services || ["Consultoria Geral", "Serviço Especializado", "Manutenção", "Suporte Técnico"];
        
        let servicesHtml = "";
        services.forEach(service => {
            servicesHtml += `
                <div class="col-md-6">
                    <div class="service-list-item">
                        <i class="fa-solid fa-circle"></i> ${service}
                    </div>
                </div>
            `;
        });
        servicesList.innerHTML = servicesHtml;

        // Botão do WhatsApp (Link dinâmico)
        const btnZap = document.getElementById('btn-whatsapp');
        btnZap.onclick = () => {
            window.open(`https://wa.me/${provider.contact}?text=Olá, vi seu perfil no ConectaServ e gostaria de um orçamento.`, '_blank');
        };

    } else {
        // Se não achar o ID (usuário entrou direto no link sem ?id=)
        document.querySelector('.main-profile-container').innerHTML = `<h2 class="text-center mt-5">Profissional não encontrado.</h2><div class="text-center"><a href="/src/index.html" class="btn btn-primary">Voltar para Home</a></div>`;
    }
});
