import {
  Button,
  ConstructorElement,
  CurrencyIcon,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import style from "./burger-constructor.module.css";
import PropTypes from 'prop-types';
import { ingredientPropType } from '../../utils/prop-types';

const BurgerConstructor = ({ ingredients }) => {
  return (
    <section className={`${style.section} mt-25 pl-4`}>
      <div className={style.container}>
        <div className="ml-8">
          <ConstructorElement
            type="top"
            isLocked={true}
            text={`${ingredients[0].name} (верх)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
        <ul className={`${style.list} custom-scroll`}>
          {ingredients.map((item) => (
            <li key={item._id} className={`${style.point}`}>
              <DragIcon type="primary" />
              <ConstructorElement
                text={item.name}
                price={item.price}
                thumbnail={item.image}
              />
            </li>
          ))}
        </ul>
        <div className="ml-8 mb-10">
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={`${ingredients[0].name} (низ)`}
            price={ingredients[0].price}
            thumbnail={ingredients[0].image}
          />
        </div>
      </div>
      <div className={`${style.order} mr-4`}>
        <div className={`${style.price} mr-10`}>
          <p className="text text_type_digits-medium mr-2">610</p>
          <CurrencyIcon type="primary"/>
        </div>
        
        <Button htmlType="button" type="primary" size="medium">
          Нажми на меня
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingredients: PropTypes.arrayOf(ingredientPropType.isRequired).isRequired,
};

export default BurgerConstructor;
