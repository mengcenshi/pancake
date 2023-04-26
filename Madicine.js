function initializeMarquee(marquee) {
  const marqueeContent = marquee.innerHTML;
  const marqueeWidth = marquee.clientWidth;
  const marqueeWrapper = document.createElement("div");

  marqueeWrapper.style.position = "relative";
  marqueeWrapper.style.display = "inline-block";
  marqueeWrapper.style.whiteSpace = "nowrap";
  marqueeWrapper.style.width = marqueeWidth * 2 + "px";

  marquee.innerHTML = "";
  marquee.appendChild(marqueeWrapper);

  const marqueeItem1 = document.createElement("span");
  marqueeItem1.innerHTML = marqueeContent;
  marqueeItem1.style.display = "inline-block";
  marqueeItem1.style.whiteSpace = "nowrap";

  const marqueeItem2 = marqueeItem1.cloneNode(true);

  marqueeWrapper.appendChild(marqueeItem1);
  marqueeWrapper.appendChild(marqueeItem2);

  let currentPosition = 0;
  const marqueeSpeed = parseFloat(marquee.dataset.speed) || 1;

  function marqueeLoop() {
    currentPosition -= marqueeSpeed;
    if (currentPosition <= -marqueeWidth) {
      currentPosition += marqueeWidth;
    }

    marqueeWrapper.style.transform = `translateX(${currentPosition}px)`;
    requestAnimationFrame(marqueeLoop);
  }

  marqueeLoop();
}

document.addEventListener("DOMContentLoaded", function () {
  const marquees = document.querySelectorAll(".marquee");
  marquees.forEach(initializeMarquee);
});

function setBackgroundImage(imageUrl) {
  const gradientBackground = document.getElementById('gradient-background');
  gradientBackground.style.opacity = '0';
  document.body.style.backgroundImage = `url('${imageUrl}')`;
  document.body.style.backgroundSize = 'cover';
  document.body.style.backgroundPosition = 'center';
}
function removeBackgroundImage() {
  const gradientBackground = document.getElementById('gradient-background');
  gradientBackground.style.opacity = '1';
  document.body.style.backgroundImage = '';
}

document.querySelectorAll('.marquee').forEach((element, index) => {
  const images = [
    'image1.gif',
    'image2.gif',
    'image3.gif',
    'image4.gif',
    // 'image5.jpg'
  ];

  element.addEventListener('mouseenter', () => {
    setBackgroundImage(images[index]);
  });

  element.addEventListener('mouseleave', () => {
    removeBackgroundImage();
  });
});