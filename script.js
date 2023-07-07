let buttons = document.getElementsByClassName('button');
let previousButton = null;
let submitBtn = document.getElementsByClassName('btn-submit')[0]
let userRating = document.getElementsByClassName('user-rating')[0]

// Handle rating buttons
const handleRatingBtn = (event) => {
     if (previousButton !== null) {
          previousButton.style.background = '';
          previousButton.style.color = '';
     }

     event.target.style.background = 'hsl(217, 12%, 63%)';
     event.target.style.color = 'white';

     previousButton = event.target;

     if (event.target.textContent.trim() !== '') {
          userRating.textContent = `You selected ${event.target.textContent} out of 5`
     }
}

// Handle submit button
const handleSubmitBtn = () => {
     let ratingsContainer = document.getElementsByClassName('container-ratings-main')[0]
     let messageContainer = document.getElementsByClassName('container-msg')[0]


     ratingsContainer.style.display = 'none'
     messageContainer.style.display = 'flex'

     if (userRating.textContent.trim() === '') {
          userRating.textContent = `You haven't selected a rating.`
          userRating.style.fontSize = '0.8rem'
     }
}


for (let i = 0; i < buttons.length; i++) {
     buttons[i].addEventListener('click', handleRatingBtn);
}

submitBtn.addEventListener('click', handleSubmitBtn)