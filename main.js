// Navigation responsive
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Onglets
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// TODO: Initialiser Firebase ici
// firebase.initializeApp({...});

// Connexion & inscription avec Firebase Auth
const loginForm = document.getElementById('login-form');
const registerForm = document.getElementById('register-form');
loginForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    try {
        // await firebase.auth().signInWithEmailAndPassword(email, password);
        alert('Connexion réussie (simulation).');
    } catch (err) {
        alert(err.message);
    }
});

registerForm?.addEventListener('submit', async e => {
    e.preventDefault();
    const name = document.getElementById('register-name').value;
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;
    const filiere = document.getElementById('register-filiere').value;
    try {
        // const user = await firebase.auth().createUserWithEmailAndPassword(email, password);
        // Enregistrer les infos supplémentaires dans Firestore
        alert('Inscription réussie (simulation).');
    } catch (err) {
        alert(err.message);
    }
});

// Contact : à remplacer par EmailJS ou Cloud Function Firebase
document.getElementById('contact-form')?.addEventListener('submit', e => {
    e.preventDefault();
    alert('Message envoyé (simulation).');
});
