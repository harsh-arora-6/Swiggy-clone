const leftBtn = document.querySelector(".best-offers .left-btn");
const rightBtn = document.querySelector(".best-offers .right-btn");

const bestOffersContent = document.querySelector(".best-offers .content");
// calculate scroll distances
function findLeftScrollDist(node) {
  return node.scrollLeft;
}

function findRightScrollDist(node) {
  const nodeWidth = node.clientWidth;
  const nodeScrollWidth = node.scrollWidth;
  const nodeScrollLeft = node.scrollLeft;
  return nodeScrollWidth - nodeWidth - nodeScrollLeft;
}
// scroll programmatically
function scrollToLeft(node) {
  const dist = findLeftScrollDist(node);
  // scroll completely left if distance is less than 450 as
  // if we subtract less 400 then button will get disabled
  if (dist <= 445) {
    node.scrollLeft -= dist;
  } else {
    node.scrollLeft -= 400;
  }
}
function scrollToRight(node) {
  const dist = findRightScrollDist(node);
  if (dist <= 445) {
    node.scrollLeft += dist;
  } else {
    node.scrollLeft += 400;
  }
}

// event listeners for scrolling
leftBtn.addEventListener("click", (e) => {
  scrollToLeft(bestOffersContent);
});

rightBtn.addEventListener("click", (e) => {
  scrollToRight(bestOffersContent);
});

// scroll event fires very frequently
function throttle(cb, delay = 200) {
  let shouldWait = false;
  let waitingArgs;
  const timeoutFunc = () => {
    if (waitingArgs == null) {
      shouldWait = false;
    } else {
      cb(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, delay);
    }
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }

    cb(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, delay);
  };
}
const updateBtnStatus = throttle((target) => {
  console.log("scrolled");
  if (findLeftScrollDist(target) <= 45) {
    leftBtn.setAttribute("disabled", "disabled");
  } else {
    leftBtn.removeAttribute("disabled");
  }
  if (findRightScrollDist(target) <= 45) {
    rightBtn.setAttribute("disabled", "disabled");
  } else {
    rightBtn.removeAttribute("disabled");
  }
});
bestOffersContent.addEventListener("scroll", (e) => {
  updateBtnStatus(e.target);
});
