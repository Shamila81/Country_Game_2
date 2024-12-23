function showRules() {
  const rulesDisplay = document.getElementById('country-info');
  rulesDisplay.innerHTML = `
    <h2>Rules</h2>
    <p>Here are the rules of the game:</p>
    <ol>
      <li>Read facts about the selected country.</li>
      <li>Choose the correct answers in the quiz.</li>
      <li>Correct answers will be highlighted green.</li>
      <li>Each correct answer earns 2 points.</li>
      <li>You can try the quiz as many times as you want.</li>
    </ol>
  `;
  rulesDisplay.classList.remove('hidden');
}

function showMain() {
  // Implement main page display logic here
}

function startGame() {
  document.querySelector('.start-btn').classList.add('hidden');
  document.getElementById('country-selection').classList.remove('hidden');

  const countryButtons = document.querySelectorAll('.country-btn');
  countryButtons.forEach(button => {
    button.disabled = false;
  });
}

function quitGame() {
  // Display the total score
  const scoreDisplay = document.getElementById('score-display');
  scoreDisplay.innerHTML = `<p>Thanks for choosing our game.</p><p>You have got: <strong>${totalScore}</strong> points.</p>`;
  scoreDisplay.classList.remove('hidden');

  // Hide other game elements as needed
  document.getElementById('country-selection').classList.add('hidden');
  document.getElementById('country-info').classList.add('hidden');
  document.getElementById('quiz-section').classList.add('hidden');
  document.querySelector('.start-btn').classList.remove('hidden');

  const startButton = document.querySelector('.start-btn');
  startButton.classList.remove('hidden');
}

function selectCountry(country) {
  const countryInfo = document.getElementById('country-info');
  const countryButtons = document.querySelectorAll('.country-btn')
  countryInfo.innerHTML = ''; // Clear previous country information
  if (country === 'Sri Lanka') {
    countryInfo.innerHTML = `
      <h2>Let's learn about Sri Lanka.</h2>
      <p>The capital of Sri Lanka is Sri Jayawardenepura Kotte.</p>
      <p>The language is Sinhalese.</p>
      <p>The currency used there is Sri Lankan rupee.</p>
      <p>Sri Lanka is famous for its stunning beaches.</p>
      <p>Your score is 0 points:</p>
      <button class="quiz-btn" onclick="startQuiz('Sri Lanka')">Start quiz</button>
    `;
  }
  else if (country === 'Bangladesh') {
    countryInfo.innerHTML = `
      <h2>Let's learn about Bangladesh.</h2>
      <p>The capital of Bangladesh is Dhaka.</p>
      <p>The official language is Bengali.</p>
      <p>The currency used there is called Taka.</p>
      <p>Bangladesh is famous for Bengal Tiger.</p>
      <p>Your score is 0 points:</p>
      <button class="quiz-btn" onclick="startQuiz('Bangladesh')">Start quiz</button>
    `;
  }
  else if (country === 'Nepal'){
    countryInfo.innerHTML = `
      <h2> let's learn about Nepal.</h2>
      <p>The capital of Nepal is Kathmandu. </p>
      <p>The language is Nepali. </p>
      <p>The currency used there is Nepalese rupee. </p>
      <p>Nepal is famous for its hills and mountains. </p>
      <p>Your score is 0 points:</p>
      <button class="quiz-btn" onclick="startQuiz('Nepal')">Start quiz</button>
    `
  }
  else if (country === 'Russia'){
    countryInfo.innerHTML = `
       <h2>Let's learn about Russia.</h2>
       <p>The capital of Russia is Moscow. </p>
       <p>The language is Russian. </p>
       <p>The currency used there is Russian ruble. </p>
       <p>Nepal is famous for its Ballet and performing arts. </p>
      <p>Your score is 0 points:</p>
      <button class="quiz-btn" onclick="startQuiz('Russia')">Start quiz</button>
    `
  }
    // Add similar blocks for other countries if needed
    countryInfo.classList.remove('hidden');
    countryButtons.forEach(button => {
      button.disabled = true;
    });
  }

function startQuiz(country) {
  const quizSection = document.getElementById('quiz-section');
  quizSection.innerHTML = '';
  if (country === 'Sri Lanka') {
    quizSection.innerHTML = `
      <h2>Quiz about Sri Lanka</h2>
      <div>
        <p>What is the capital of Sri Lanka?</p>
        <button class="quiz-btn" onclick="checkAnswer('Sri Jayawardenepura Kotte', this)">1. Sri Jayawardenepura Kotte</button>
        <button class="quiz-btn" onclick="disableOptions(this)">2. Kandy</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. Mars</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Paris</button>
      </div>
      <div>
        <p>What is the official language in Sri Lanka?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. I forgot</button>
        <button class="quiz-btn" onclick="disableOptions(this)">2. Chinese</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. Hindi</button>
        <button class="quiz-btn" onclick="checkAnswer('Sinhalese', this)">4. Sinhalese</button>
      </div>
      <div>
        <p>What is the name of the currency used in Sri Lanka?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. Ruble</button>
        <button class="quiz-btn" onclick="checkAnswer('Sri Lankan rupee', this)">2. Sri Lankan rupee</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. Dollars</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Euros</button>
      </div>
      <div>
        <p>What is Sri Lanka famous for?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. Big watermelons</button>
        <button class="quiz-btn" onclick="disableOptions(this)">2. Snow</button>
        <button class="quiz-btn" onclick="checkAnswer('Stunning beaches', this)">3. Stunning beaches</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Forests</button>
      </div>
      <button class="quiz-btn" onclick="tryAgain()">Try again</button>
    `;
  }
  else if (country === 'Bangladesh') {
    quizSection.innerHTML = `
      <h2>Quiz about Bangladesh</h2>
      <div>
        <p>What is the capital of Bangladesh?</p>
        <button class="quiz-btn" onclick="checkAnswer('Dhaka', this)">1. Dhaka</button>
        <button class="quiz-btn" onclick="disableOptions(this)">2. Chittagong</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. Delhi</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Beijing</button>
      </div>
      <div>
        <p>What is the official language in Bangladesh?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. Urdu</button>
        <button class="quiz-btn" onclick="checkAnswer('Bengali', this)">2. Bengali</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. English</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Arabic</button>
      </div>
      <div>
        <p>What is the name of the currency used in Bangladesh?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. Rupee</button>
        <button class="quiz-btn" onclick="disableOptions(this)">2. Dollar</button>
        <button class="quiz-btn" onclick="checkAnswer('Taka', this)">3. Taka</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Yen</button>
      </div>
      <div>
        <p>What is Bangladesh famous for?</p>
        <button class="quiz-btn" onclick="disableOptions(this)">1. Chocolate</button>
        <button class="quiz-btn" onclick="checkAnswer('Bengal Tiger', this)">2. Bengal Tiger</button>
        <button class="quiz-btn" onclick="disableOptions(this)">3. Pyramids</button>
        <button class="quiz-btn" onclick="disableOptions(this)">4. Eiffel Tower</button>
      </div>
      <button class="quiz-btn" onclick="tryAgain()">Try again</button>
    `;
  }
  else if (country === 'Nepal') {
    quizSection.innerHTML = `
       <h2>Quiz about Nepal</h2>
       <div>
         <p>What is the capital of Nepal?</p>
         <button class="quiz-btn" onclick="checkAnswer('Kathmandu', this)">1. Kathmandu</button>
         <button class="quiz-btn" onclick="disableOptions(this)">2. Cat-mandu</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Moscow</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Helsinki</button>
       </div>
       <div>
         <p>What is the official language in Nepal?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. I forgot</button>
         <button class="quiz-btn" onclick="disableOptions(this)">2. Chinese</button>
         <button class="quiz-btn" onclick="checkAnswer('Nepali', this)">3. Nepali</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Nep-language</button>
       </div>
       <div>
         <p>What is the name of the currency used in Nepal?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. Nepalese ruble</button>
         <button class="quiz-btn" onclick="checkAnswer('Nepalese rupee', this)">2. Nepalese rupee</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Indian rupee</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. You can use any</button>
       </div>
       <div>
         <p>What is Nepal famous for?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. Panda bears</button>
         <button class="quiz-btn" onclick="disableOptions(this)">2. Formula-1</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Indian Ocean</button>
         <button class="quiz-btn" onclick="checkAnswer('Beautiful mountains', this)">4. Beautiful mountains</button>
       </div>
       <button class="quiz-btn" onclick="tryAgain()">Try again</button>
    `;
  }
  else if (country === 'Russia') {
    quizSection.innerHTML = `
       <h2>Quiz about Russia</h2>
       <div>
         <p>What is the capital of Russia?</p>
         <button class="quiz-btn" onclick="checkAnswer('Moscow', this)">1. Moscow</button>
         <button class="quiz-btn" onclick="disableOptions(this)">2. Washington</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Bogota</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Beijing</button>
       </div>
       <div>
         <p>What is the official language in Russia?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. Spanish</button>
         <button class="quiz-btn" onclick="checkAnswer('Russian', this)">2. Russian</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. English</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Bengali</button>
       </div>
       <div>
         <p>What is the name of the currency used in Russia?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. Rupee</button>
         <button class="quiz-btn" onclick="checkAnswer('Ruble', this)">2. Ruble</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Yen</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Euro</button>
       </div>
       <div>
         <p>What is Russia famous for?</p>
         <button class="quiz-btn" onclick="disableOptions(this)">1. Chocolate</button>
         <button class="quiz-btn" onclick="checkAnswer('Ballet and Arts', this)">2. Ballet and Arts</button>
         <button class="quiz-btn" onclick="disableOptions(this)">3. Vodka</button>
         <button class="quiz-btn" onclick="disableOptions(this)">4. Spices</button>
       </div>
       <button class="quiz-btn" onclick="tryAgain()">Try again</button>

    `;
  }
  quizSection.classList.remove('hidden');
  document.getElementById('country-info').classList.add('hidden');
}


  function disableOptions(selectedOption) {
    const parentDiv = selectedOption.parentNode;
    const buttons = parentDiv.querySelectorAll('.quiz-btn');
    buttons.forEach(button => {
      if (button !== selectedOption) {
        button.disabled = true;
      }
    });
  }

  let totalScore = 0;

  function checkAnswer(correctAnswer, btn) {
    const parentDiv = btn.parentNode;
    const buttons = parentDiv.querySelectorAll('.quiz-btn');
    buttons.forEach(button => {
      button.disabled = true;
    });
    if (btn.textContent.trim() === correctAnswer) {
      btn.style.backgroundColor = 'green';
      totalScore += 2; // Increase score for correct answer
    } else {
      btn.style.backgroundColor = 'green';
      totalScore += 2; // Deduct 1 point for incorrect answers
    }
  }

  function tryAgain() {
    const buttons = document.querySelectorAll('.quiz-btn');
    buttons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = '';
    });
  }
