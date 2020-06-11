 const onTouchStart = (e, initialX, initialY, xOffset, yOffset, active, dragItem) => {
    console.log("on touch start");

    initialX = e.touches[0].clientX - xOffset;
    initialY = e.touches[0].clientY - yOffset;

    //dragItem.ontouchend = onTouchEnd;
    //dragItem.ontouchmove = onTouchMove;
    //dragItem.onmousedown = onMouseDown;

    if (e.target === dragItem) {
      active = true;
    }
  };

  const onTouchMove = (e, active, currentX, currentY, xOffset, yOffset, setTranslate) => {
    console.log("touch move");
    if (active) {
      e.preventDefault();

      currentX = e.touches[0].clientX - initialX;
      currentY = e.touches[0].clientY - initialY;
    }

    xOffset = currentX;
    yOffset = currentY;

    setTranslate(currentX, currentY, dragItem);
  };

  const onTouchEnd = e => {
    console.log("touch end");
    initialX = currentX;
    initialY = currentY;

    active = false;
    //dragItem.ontouchend = null;
    //dragItem.ontouchmove = null;
    //dragItem.onmousedown = null;
    //dragItem.ontouchstart = null;
  };

  const onMouseDown = e => {
    console.log("on mouse down");
    initialX = e.clientX - xOffset;
    initialY = e.clientY - yOffset;

    if (e.target === dragItem) {
      active = true;
    }
  };