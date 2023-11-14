import React, { useState } from 'react';
import { Frame1000003130 } from "./Frame1000003130";
import { Group1000003139 } from "./Group1000003139";

const Preview: React.FC = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div className="preview-section">
            {/* <div className="previewcomponents">
                <Frame1000003130 />
            </div> */}
            {/* <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => setInputValue(e.target.value)} 
                placeholder="輸入外送地址"
            /> */}
            <div className="number-dropdown">
                <select className="number">
                    <option className="numberlist" value="one">1</option>
                    <option className="numberlist" value="two">2</option>
                    <option className="numberlist" value="three">3</option>
                    <option className="numberlist" value="four">4</option>
                </select>   
            </div>

            {/* <div className="searchcomponents">
                <Group1000003139 />
            </div> */}
            {/* <button>開動</button> */}
        </div>
    );
}