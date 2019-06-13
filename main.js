const btns = document.querySelectorAll('button');
const link = document.getElementById('link');
let frame = 0;

btns.forEach(button => {
  button.addEventListener('click', (e) => {
    const id = e.target.id;
    console.log(id);
  })
})

for (let i = 0; i < 256; i++) {
  const box = document.createElement('div');
  box.classList.add('box');
  link.appendChild(box);
}


const colors = [
  'white',
  'PeachPuff',
  'Green',
  'Chocolate'
]

const downFrames = [
  [
    0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0,
    0, 0, 1, 0, 2, 3, 3, 3, 3, 3, 3, 2, 0, 1, 0, 0,
    0, 0, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0,
    0, 0, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 0, 0,
    0, 0, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0,
    0, 0, 0, 0, 2, 1, 1, 3, 3, 1, 1, 2, 3, 3, 0, 0,
    0, 0, 3, 3, 3, 3, 3, 1, 1, 1, 2, 2, 2, 1, 0, 0,
    0, 3, 3, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 0, 0,
    0, 3, 1, 1, 1, 3, 3, 1, 3, 3, 2, 2, 3, 0, 0, 0,
    0, 3, 3, 1, 3, 3, 3, 1, 2, 3, 3, 3, 1, 0, 0, 0,
    0, 3, 3, 1, 3, 3, 3, 1, 3, 3, 2, 2, 2, 0, 0, 0,
    0, 3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 3, 0, 0, 0, 0,
    0, 0, 1, 1, 1, 1, 1, 0, 0, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0
  ],
  [
    0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0,
    0, 0, 1, 0, 2, 3, 3, 3, 3, 3, 3, 2, 0, 1, 0, 0,
    0, 0, 1, 0, 3, 3, 3, 3, 3, 3, 3, 3, 0, 1, 0, 0,
    0, 0, 1, 1, 3, 1, 2, 1, 1, 2, 1, 3, 1, 1, 0, 0,
    0, 0, 1, 1, 3, 1, 3, 1, 1, 3, 1, 3, 1, 1, 0, 0,
    0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 0, 0,
    0, 0, 0, 2, 2, 1, 1, 3, 3, 1, 1, 2, 2, 3, 0, 0,
    0, 3, 3, 3, 3, 3, 1, 1, 1, 1, 2, 2, 3, 3, 3, 0,
    3, 3, 1, 3, 3, 3, 3, 2, 2, 2, 2, 2, 1, 3, 3, 0,
    3, 1, 1, 1, 3, 3, 1, 3, 3, 2, 2, 1, 1, 1, 3, 0,
    3, 3, 1, 3, 3, 3, 1, 2, 3, 3, 3, 3, 1, 1, 1, 0,
    3, 3, 1, 3, 3, 3, 1, 3, 3, 2, 2, 2, 2, 1, 0, 0,
    3, 3, 3, 3, 3, 3, 1, 2, 2, 2, 2, 2, 0, 0, 0, 0,
    0, 1, 1, 1, 1, 1, 3, 0, 0, 3, 3, 3, 0, 0, 0, 0,
    0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0
  ]
];

const drawDown = () => {
  // window.requestAnimationFrame(drawDown);
  let len = downFrames.length;
  advanceFrames(len);

  loopThroughFrames(downFrames);
};

const advanceFrames = (len) => {
  console.log(frame)
  frame++;
  if (frame >= len) {
    frame = 0;
  }
};

const loopThroughFrames = (frames) => {
  Array.prototype.slice.call(link.children).forEach((box, i) => {
    box.classList.add(i);
    box.style.backgroundColor = colors[frames[frame][i]];
  })
}

setInterval(() => {
  drawDown()
}, 300)

