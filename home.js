let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 5000); // Change image every 3 seconds
}

function currentSlide(n) {
    slideIndex = n - 1; // Adjust for zero-based index
    showSlides();
}

document.addEventListener("DOMContentLoaded", function() {
    const options = document.querySelectorAll('.option');
    const cityList = document.getElementById('city-list');
    const itinerary = document.getElementById('itinerary');

    const cities = {
        city: [
            { name: 'Mumbai', img: 'https://i.pinimg.com/564x/b4/3f/a1/b43fa13581b70f12a1f638067976d9f1.jpg' },
            { name: 'Delhi', img: 'https://i.pinimg.com/564x/d6/db/05/d6db054449ae5515da69a959d2d14704.jpg' },
            { name: 'Bangalore', img: 'https://i.pinimg.com/564x/fd/a5/ad/fda5ad8c7bc33eae4ff23006f4d84ab7.jpg' },
            { name: 'Kolkata', img: 'https://i.pinimg.com/564x/b0/fb/2d/b0fb2d5391092dd828e6d6cdd0edd4ef.jpg' },
            { name: 'Chennai', img: 'https://i.pinimg.com/236x/12/ef/2a/12ef2add6d6b717905e9abdbd1d841cd.jpg' }
        ],
        outdoors: [
            { name: 'Rishikesh', img: 'https://i.pinimg.com/736x/f2/ba/1c/f2ba1cde545fbdc7558cf63616dd8294.jpg' },
            { name: 'Manali', img: 'https://i.pinimg.com/564x/43/c3/86/43c386f68867c96dda70a60cb99110df.jpg' },
            { name: 'Darjeeling', img: 'https://i.pinimg.com/564x/a8/72/d4/a872d42662e7405dbb26a4e43cec099a.jpg' },
            { name: 'Munnar', img: 'https://i.pinimg.com/564x/ec/45/b4/ec45b4b981924e4817f00010a7d98f41.jpg' },
            { name: 'Coorg', img: 'https://i.pinimg.com/564x/e9/4b/a7/e94ba748c2fb095cdc13ede9a6f05de7.jpg' }
        ],
        beach: [
            { name: 'Goa', img: 'https://i.pinimg.com/564x/51/6d/8b/516d8b4f20c9fbd30ede56001fc907ab.jpg' },
            { name: 'Pondicherry', img: 'https://i.pinimg.com/564x/27/cc/d7/27ccd7e6d5f16eb49c961b258c438a7e.jpg' },
            { name: 'Kochi', img: 'https://i.pinimg.com/564x/59/48/dd/5948dd68fcfb1429c6f7163d7c691f30.jpg' },
            { name: 'Andaman', img: 'https://i.pinimg.com/736x/98/d6/85/98d685c82170c0ff7767447a56e4fd37.jpg' },
            { name: 'Lakshadweep', img: 'https://i.pinimg.com/564x/e4/ff/ad/e4ffad6feadfff3b11d40772d9b95aee.jpg' }
        ],
        mountains: [
            { name: 'Shimla', img: 'https://i.pinimg.com/736x/2c/3f/54/2c3f545d9c913f5f64071b0383a5ecfe.jpg' },
            { name: 'Leh', img: 'https://i.pinimg.com/564x/26/11/a5/2611a5ac47fe3c1d01ff23ea70a0758e.jpg' },
            { name: 'Nainital', img: 'https://i.pinimg.com/564x/42/75/41/4275419978ad2b0239a327620778fd49.jpg' },
            { name: 'Mussoorie', img: 'https://i.pinimg.com/564x/39/09/47/3909470745125e9bfa121ade229d7fa6.jpg' },
            { name: 'Auli', img: 'https://i.pinimg.com/564x/24/32/c9/2432c9b412c2e6d8897a7d398d822c20.jpg' }
        ]
    };

    options.forEach(option => {
        option.addEventListener('click', function() {
            const type = this.getAttribute('data-type');
            cityList.innerHTML = ''; // Clear previous cities
            cityList.style.display = 'grid'; // Show city list

            cities[type].forEach(city => {
                const cityItem = document.createElement('div');
                cityItem.classList.add('city');
                cityItem.innerHTML = `<img src="${city.img}" alt="${city.name}"><span>${city.name}</span>`;
                
                cityList.appendChild(cityItem);
            });
        });
    });

    
});