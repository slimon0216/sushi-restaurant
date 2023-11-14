import React, { useState } from 'react';
import { Frame1000003130 } from "./Frame1000003130";
import { Group1000003139 } from "./Group1000003139";
import { Meal } from "./Meal";
import { Cost } from "./Cost";
import TextInput  from "./TextInput";
import Foodimage from './Foodimage';

const Search: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <>

        <div className="text-section">
                <TextInput/>
        </div>
        
        <div className="search-section">
            <div className="searchcomponents">
                <Frame1000003130 />
            </div>

            <div className="meal-section">
                <Meal/>
            </div>

            <div className="cost-section">
                <Cost/>
            </div>

            <div>
                 <Foodimage/>
            </div>


            {/* <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="輸入外送地址"
            /> */}
            <div className="number-dropdown">
                <select className="number">
                    <option className="dropdownlist2" value="number"> 數量 :  1</option>
                    <option className="dropdownlist2" value="one">數量 ：2</option>
                    <option className="dropdownlist2" value="two">數量 ：3</option>
                    <option className="dropdownlist2" value="three">數量 ：4</option>
                </select>   
            </div>


            {/* <div className="searchcomponents">
                <Group1000003139 />
            </div> */}
            {/* <button>開動</button> */}
        </div>
        </>
        
        


        
    );
}

export default Search;
