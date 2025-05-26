document.addEventListener('DOMContentLoaded', function() {
    // Dados de exemplo para as imagens do carrossel
    const carouselImages = [
        {
            src: 'images/ceramica1.jpg',
            alt: 'Vaso de cerâmica azul',
            title: 'Vaso Azul Marinho',
            description: 'Vaso decorativo com acabamento em esmalte azul profundo'
        },
        {
            src: 'images/ceramica2.jpg',
            alt: 'Conjunto de pratos artesanais',
            title: 'Conjunto Terra',
            description: 'Conjunto de pratos em tons terrosos com acabamento natural'
        },
        {
            src: 'images/ceramica3.jpg',
            alt: 'Tigelas decorativas',
            title: 'Tigelas Decorativas',
            description: 'Conjunto de tigelas para servir em cores variadas'
        },
        {
            src: 'images/ceramica4.jpg',
            alt: 'Xícaras de cerâmica',
            title: 'Xícaras Artesanais',
            description: 'Conjunto de xícaras com detalhes feitos à mão'
        },
        {
            src: 'images/ceramica5.jpg',
            alt: 'Vasos decorativos pequenos',
            title: 'Mini Vasos',
            description: 'Conjunto de mini vasos perfeitos para suculentas'
        }
    ];

    // Elementos do DOM
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselThumbnails = document.querySelector('.carousel-thumbnails');
    const prevButton = document.querySelector('.carousel-button.prev');
    const nextButton = document.querySelector('.carousel-button.next');
    
    let currentIndex = 0;

    // Função para criar os slides do carrossel
    function createCarouselSlides() {
        carouselImages.forEach((image, index) => {
            // Criar slide principal
            const slide = document.createElement('div');
            slide.className = 'carousel-slide';
            
            const img = document.createElement('img');
            img.src = image.src;
            img.alt = image.alt;
            
            const caption = document.createElement('div');
            caption.className = 'carousel-caption';
            caption.innerHTML = `
                <h3>${image.title}</h3>
                <p>${image.description}</p>
            `;
            
            slide.appendChild(img);
            slide.appendChild(caption);
            carouselTrack.appendChild(slide);
            
            // Criar miniatura
            const thumbnail = document.createElement('div');
            thumbnail.className = 'carousel-thumbnail';
            if (index === 0) thumbnail.classList.add('active');
            
            const thumbImg = document.createElement('img');
            thumbImg.src = image.src;
            thumbImg.alt = `Miniatura - ${image.alt}`;
            
            thumbnail.appendChild(thumbImg);
            carouselThumbnails.appendChild(thumbnail);
            
            // Adicionar evento de clique na miniatura
            thumbnail.addEventListener('click', () => {
                goToSlide(index);
            });
        });
    }

    // Função para ir para um slide específico
    function goToSlide(index) {
        // Garantir que o índice está dentro dos limites
        if (index < 0) {
            index = carouselImages.length - 1;
        } else if (index >= carouselImages.length) {
            index = 0;
        }
        
        currentIndex = index;
        
        // Atualizar o carrossel
        carouselTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Atualizar miniaturas ativas
        document.querySelectorAll('.carousel-thumbnail').forEach((thumb, i) => {
            if (i === currentIndex) {
                thumb.classList.add('active');
            } else {
                thumb.classList.remove('active');
            }
        });
    }

    // Adicionar eventos para os botões de navegação
    prevButton.addEventListener('click', () => {
        goToSlide(currentIndex - 1);
    });
    
    nextButton.addEventListener('click', () => {
        goToSlide(currentIndex + 1);
    });

    // Inicializar o carrossel
    createCarouselSlides();

    // Navegação automática (opcional)
    let autoSlideInterval;
    
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            goToSlide(currentIndex + 1);
        }, 5000); // Muda a cada 5 segundos
    }
    
    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
    
    // Iniciar navegação automática
    startAutoSlide();
    
    // Parar navegação automática quando o cursor estiver sobre o carrossel
    document.querySelector('.carousel-container').addEventListener('mouseenter', stopAutoSlide);
    document.querySelector('.carousel-container').addEventListener('mouseleave', startAutoSlide);

    // Processamento do formulário de contato
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Dados do formulário
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Aqui você adicionaria código para enviar os dados do formulário
            // Como exemplo, apenas mostramos um alerta
            alert(`Obrigado ${name}! Sua mensagem foi recebida. Entraremos em contato pelo email ${email} em breve.`);
            
            // Limpar formulário
            contactForm.reset();
        });
    }
});
