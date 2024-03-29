import styles from "./consructor-ingredient.module.css";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredient } from "../../services/constructor/action";
import { ingredientPropType } from "../../utils/prop-types";
import PropTypes from 'prop-types';
import { ItemTypes } from "../../utils/item-types";
import { useDrag, useDrop } from "react-dnd";
import { useRef } from "react";
import { useDispatch } from "react-redux";


export const ConstructorIngredient = ({ ingredient, index, moveCard }) => {

  const dispatch = useDispatch();

  const ref = useRef(null);
  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.CONSTRUCTOR_INGREDIENT,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }
      moveCard(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.CONSTRUCTOR_INGREDIENT,
    item: () => {
      return { index };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  return (
    <div
      ref={ref}
      style={{ opacity: opacity, cursor: "pointer" }}
      data-handler-id={handlerId}
      className={`mb-4 ml-4 ${styles.li}`}
    >
      <DragIcon />
      <ConstructorElement
        extraClass={styles.element}
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image_mobile}
        handleClose={() => dispatch(deleteIngredient(ingredient))}
      />
    </div>
  );
}

ConstructorIngredient.propTypes = {
  ingredient: ingredientPropType.isRequired,
  index: PropTypes.number.isRequired,
  moveCard: PropTypes.func.isRequired
}