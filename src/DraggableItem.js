import React, { useEffect, useRef } from "react";

import InputMenu from "./InputMenu";
import InputForm from "./InputForm";

import "./index.css";

const DraggableItem = props => {

    var i = 0;
    
    const draggableItemRef = useRef(null);

    var active = false;
    var initialX;
    var initialY;
    var currentX;
    var currentY;

    var xOffset = props.idea.style.left;
    var yOffset = props.idea.style.top;

    function useEventListener(eventName, handler, element){
      
        const savedHandler = useRef();
        
        useEffect(() => {
          savedHandler.current = handler;
        }, [handler]);
      
        useEffect(
          () => {
        
            const isSupported = element && element.addEventListener;
            if (!isSupported) return;
           
            const eventListener = event => savedHandler.current(event);
            
            element.addEventListener(eventName, eventListener);
            
            return () => {
              element.removeEventListener(eventName, eventListener);
            };
          },
          [eventName, element] 
        );
      };

    useEffect(() => {

        setTranslate(props.idea.style.left, props.idea.style.top, draggableItemRef.current);

        /*
        document.addEventListener("touchstart", onTouchStart, false);
        document.addEventListener("touchend", onDragEnd, false);
        document.addEventListener("touchmove", onTouchMove, false);

        document.addEventListener("mousedown", ev => { onMouseDown(ev); });
        document.addEventListener("mousemove", ev => { onMouseMove(ev) });
        window.addEventListener("mouseup", ev => { onDragEnd(ev) });
*/
    });

    const onMouseDown = e => {
        //console.log("mouse down ");
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;

        xOffset = e.clientX - initialX;
        yOffset = e.clientY - initialY;

        const dragItem = draggableItemRef.current;

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

            const dragItem = draggableItemRef.current;

            setTranslate(currentX, currentY, dragItem);
        }
    };

    const onDragEnd = () => {

        // console.log(' m end ')
        initialX = currentX;
        initialY = currentY;

        active = false;

        document.body.classList.remove('overflow')

      //  console.log('DraggableItem update idea ' + i)

        updateIdea(currentX, currentY);
    };

    const updateIdea = (curX, curY) => {

        if (!(typeof curX === 'undefined')) {

            /*
            let idea = {
                id : props.idea.id,
                content: 'New Idea',
                style : {
                    left: curX,
                    top: curY
                }

            }
            props.updateIdea(idea);
        */

           // props.idea.style.left = curX;
           // props.idea.style.top = curY;
            props.updateIdea(curX, curY, props.idea);
            
        }


    };

    const onTouchStart = e => {
        // console.log("touch start");
        initialX = e.touches[0].clientX - xOffset;
        initialY = e.touches[0].clientY - yOffset;

        document.body.classList.add('overflow');

        const dragItem = draggableItemRef.current;

        if (e.target === dragItem) {
            active = true;
        }
    };

    const onTouchMove = e => {
        //console.log("touch move");
        if (active) {
            e.preventDefault();

            currentX = e.touches[0].clientX - initialX;
            currentY = e.touches[0].clientY - initialY;

            xOffset = currentX;
            yOffset = currentY;

            document.body.classList.add('overflow');

            const dragItem = draggableItemRef.current;

            setTranslate(currentX, currentY, dragItem);
        }
    };

    const setTranslate = (xPos, yPos, el) => {
        el.style.left = xPos + 'px';
        el.style.top = yPos + 'px';
    };

    
    useEventListener("mousedown", onMouseDown, document);
    useEventListener("mousemove", onMouseMove, document);
    useEventListener("mouseup", onDragEnd, window);

    useEventListener("touchstart", onTouchStart, document);
    useEventListener("touchend", onDragEnd, document);
    useEventListener("touchmove", onTouchMove, document);

    return (
        <div
            id='item'
            ref={draggableItemRef}
        >
            <InputForm idea={props.idea} style={{ top: '10px' }} />
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
