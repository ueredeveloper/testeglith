import React, { useEffect, useRef } from "react";

import InputMenu from "./InputMenu";
import InputForm from "./InputForm";

import "./index.css";

const DraggableItem = props => {
    const draggableItemRef = useRef(null);

    var dragItem;

    var active = false;
    var initialX;
    var initialY;
    var currentX;
    var currentY;

    var xOffset = props.idea.style.left;
    var yOffset = props.idea.style.top;

    useEffect(() => {

        if (!dragItem) {
            console.log('inicialização da ideia')
        }
        dragItem = draggableItemRef.current;

        setTranslate(props.idea.style.left, props.idea.style.top, dragItem);

        document.addEventListener("touchstart", onTouchStart, false);
        document.addEventListener("touchend", onDragEnd, false);
        document.addEventListener("touchmove", onTouchMove, false);

        document.addEventListener("mousedown", ev => { onMouseDown(ev); });
        document.addEventListener("mousemove", ev => { onMouseMove(ev) });
        window.addEventListener("mouseup", ev => { onDragEnd(ev) });

    }, []);

    const onMouseDown = e => {
       //console.log("mouse down ");
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;

        if (e.target === dragItem) {
            active = true;
        }
    };

    const onMouseMove = e => {

        //console.log('on m m')
        if (active) {
            e.preventDefault();

            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    };

    const onDragEnd = () => {

       // console.log(' m end ')
        initialX = currentX;
        initialY = currentY;

        active = false;

        updateIdea(currentX, currentY);
    };

    const updateIdea = (curX, curY) => {

        if (! (typeof curX === 'undefined')){
            props.idea.style.left = curX;
            props.idea.style.top = curY;
          
            props.updateIdea(props.idea);

        }

      
    };

    const onTouchStart = e => {
        // console.log("touch start");
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;

        if (e.target === dragItem) {
            active = true;
        }
    };

    const onTouchMove = e => {
        //console.log("touch move");
        if (active) {
            e.preventDefault();
          
            dragItem.style = {overflow:'hidden'}


            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            setTranslate(currentX, currentY, dragItem);
        }
    };

    const setTranslate = (xPos, yPos, el) => {

       // el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
       el.style.left = xPos + 'px';
       el.style.top = yPos + 'px';
 
    };

    return (
        <div
            id='item'
            ref={draggableItemRef}
        >
            <InputForm idea={props.idea} style={{top:'10px'}}/>
            <InputMenu
                idea={props.idea}
                persistIdea={props.persistIdea}
                deleteIdea={props.deleteIdea}
                updateIdea={props.updateIdea}
            />
        </div>
    );
};

export default DraggableItem;
