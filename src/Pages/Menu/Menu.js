import React, { useState } from 'react';
import "./menu.css";
import Items from './Items';
import Categories from './Categories';
import items from '../../data/dataMenu';
import Title from '../../Components/Title/Title';

const allCategories =['all',...new Set(items.map((item)=>item.category))];

function Menu() {
    const [menuItems, setMenuItems] = useState(items);
    const [categories, setCategories] = useState(allCategories);

    const filterItems = (category) => {
        if(category === 'all' ){
            setMenuItems(items);
            return;
        }
        const newItems = items.filter((item) => item.category === category);
        setMenuItems(newItems);
    }

    return (
        <main>
            <section className="menu section">
                <Title title="Our menu"/>
                <Categories categories={categories} filterItems={filterItems} />
                <Items items={menuItems} />
            </section>
        </main>
    );
}

export default Menu;