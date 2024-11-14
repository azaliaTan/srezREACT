import { useState } from 'react'
import { products } from '../../data/data'
import {  MyCard } from '../Card/Card'
import style from './Katalog.module.css'
import { Search } from '../Search/Search'



export function Katalog(){
    const [sorting, setSorting]=useState('');
    const[query,setQuery]=useState('');
    const[category,setCategory]=useState('');
    function sort(e){
        setSorting(e.target.value);
    }
    function handleChange(e){
        setQuery(e.target.value)
    }

    const filteredProducts=products.filter((product)=>{
        return product.name.toLowerCase().includes(query.toLowerCase())
        &&
        (product.category==category || category==0)
        ;
    });
    const sortProducts =(sorting,products)=>{
        switch(sorting){
            case 'price_asc':
                return [...products].sort((a,b)=>a.price - b.price);
                case 'price_desc':
                    return [...products].sort((a,b)=>b.price - a.price);
        case 'count_asc':
            return [...products].sort((a,b)=>a.count - b.count);
        case 'count_desc':
          return [...products].sort((a,b)=>b.count - a.count);
                default:
                    return products;
        }
    };
    const sortedFilteredProducts=sortProducts(sorting,filteredProducts);
    return(
        
        
           <div className={style.katalog}>
            <h5>Каталог товаров</h5>
             
            <div className={style.kateg}>
                <p>Категории</p>
                <button className={style.kk} onClick={()=>setCategory(0)}>Все товары</button>
                <button className={style.kk} onClick={()=>setCategory(1)}>Струнные</button>
                <button className={style.kk} onClick={()=>setCategory(2)}>Клавишные</button>  
            </div>
            <div className="ooo">
            
            <select onChange={sort}>
            <option value="1">Выберите..</option>
                <option value="price_asc">По возрастанию цены</option>
                <option value="price_desc">По убыванию цены</option>
                <option value="count_asc">По возрастанию наличия</option>
                <option value="count_desc">По убыванию наличия</option>

            </select>
            <Search handleChange={handleChange}/>
            </div>
            <div className={style.list}>
           
            {
            sortedFilteredProducts.length ?
            sortedFilteredProducts.map((product)=>{
                return(
                    <MyCard {...product}/>
                )
            })
            :
            <p className="er">Не найдено</p>
              }
               


            </div>

            
           </div>



      
       
    )
}