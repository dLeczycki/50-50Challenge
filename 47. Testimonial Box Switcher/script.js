const testimonial = document.querySelector('div.testimonial-text');
const userName = document.querySelector('p.name');
const userPost = document.querySelector('p.post');
const userImage = document.querySelector('div.user img');

let index = 0;
const testimonials = getData();

updateTestimonial();

function updateTestimonial() {
    const user = testimonials[index];

    userName.textContent = user.name;
    userPost.textContent = user.post;
    userImage.setAttribute('src', user.imageSrc);
    testimonial.textContent = user.testimonial;

    index++;
    if (index === testimonials.length) index = 0;
    setTimeout(updateTestimonial, 10000);
}

function getData() {
    const data = [{
            testimonial: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be disappointed by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
            name: 'Jack Clarkson',
            post: 'IT Manager',
            imageSrc: 'https://randomuser.me/api/portraits/men/25.jpg'
        },
        {
            testimonial: "I've worked with literally hundreds of HTML/CSS developers and I have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays heed to the details. I love developers who respect each and every aspect of a throughly thought out design and do their best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time.",
            name: 'Wilma Stone',
            post: 'Graphic Designer',
            imageSrc: 'https://randomuser.me/api/portraits/women/80.jpg'
        },
        {
            testimonial: "This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. We'll definitely repeat with him.",
            name: 'Ronald White',
            post: 'HiperCompany CEO',
            imageSrc: 'https://randomuser.me/api/portraits/men/8.jpg'
        },
        {
            testimonial: 'This guy is a top notch designer and front end developer. He communicates well, works fast and produces quality work. We have been lucky to work with him!',
            name: 'Cloe Sims',
            post: 'Architect',
            imageSrc: 'https://randomuser.me/api/portraits/women/85.jpg'
        }
    ]
    return data;
}