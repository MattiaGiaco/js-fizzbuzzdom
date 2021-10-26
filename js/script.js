const row = document.querySelector('.row')

for (let i = 1; i<= 100; i++) {
  const box = document.createElement('div');
  box.className = 'box';
  box.innerHTML = i;
  row.append(box)
  
  if (!(i % 15)) {
    box.classList.add('fizzbuzz')
    box.innerHTML = 'fizzbuzz';
  }else if (!(i % 5)) {
    box.classList.add('buzz')
    box.innerHTML = 'buzz';
  }else if (!(i % 3)) {
    box.classList.add('fizz')
    box.innerHTML = 'fizz';
  }
};