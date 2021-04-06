
// Data is an array of objects which contains information about the candidates
const data = [{
        name: 'Ajit Ram',
        age: 22,
        city: 'Ulhasnagar',
        language: 'JavaScript',
        framework: 'Reacts Js',
        image: 'https://randomuser.me/api/portraits/men/58.jpg'
    },

    {
        name: 'Kishan Chavhan',
        age: 23,
        city: 'Mumbai',
        language: 'JavaScript',
        framework: 'Angular',
        image: 'https://randomuser.me/api/portraits/men/54.jpg'
    },

    {
        name: 'Latesh Bhangale',
        age: 22,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },

    {
        name: 'Tushar Sonawane',
        age: 22,
        city: 'Mumbai',
        language: 'Python',
        framework: 'Flask',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },

    {
        name: 'Priyambada Yadav',
        age: 23,
        city: 'Mumbai',
        language: 'Go',
        framework: 'Go Framework',
        image: 'https://randomuser.me/api/portraits/women/65.jpg'
    }
]


// CV Iterator
function cvIterator(profiles) {
    let nextIndex = 0;
    return {
        next: function() {
            return nextIndex < profiles.length ? { value: profiles[nextIndex++], done: false } : { done: true }
        }
    };
}
const candidates = cvIterator(data);

nextCV();
// Button listener for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);


function nextCV() {
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if (currentCandidate != undefined) {
        image.innerHTML = `<img src='${currentCandidate.image}'>`;
        profile.innerHTML = `<ul class="list-group">
    <li class="list-group-item">Name: ${currentCandidate.name}</li>
    <li class="list-group-item">${currentCandidate.age} years old</li>
    <li class="list-group-item">Lives in ${currentCandidate.city}</li>
    <li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
    <li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
  </ul>`;
    } else {
        alert('End of candidate applications');
        window.location.reload();
    }

}