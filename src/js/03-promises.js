const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
event.preventDefault(); 
const delay = parseInt(form.elements.delay.value);
const step = parseInt(form.elements.step.value);
const amount = parseInt(form.elements.amount.value);

for (let i = 1; i <= amount; i+=1) {
createPromise(i, delay + i * step)
.then(({ position, delay }) => {
console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
})
.catch(({ position, delay }) => {
console.log(`❌ Rejected promise ${position} in ${delay}ms`);
});
}
});

function createPromise(position, delay) {
return new Promise((resolve, reject) => {
const shouldResolve = Math.random() > 0.3;
setTimeout(() => {
if (shouldResolve) {
resolve({ position, delay });
} else {
reject({ position, delay });
}
}, delay);
});
}
