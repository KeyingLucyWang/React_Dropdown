import './DropdownMenu.css';

import {React, useEffect, useRef, useState} from "react";

const DropdownMenu = ({
    itemsTitle,
    items,
    isMulti,
}) => {

    const emptyDisplayText = "Select";
    const [showItems, setShowItems] = useState(false);
    const [selectedItems, setSelectedItems] = useState(isMulti ? [] : null);

    const dropdownRef = useRef();

    useEffect(() => {
        const handler = (event) => {
            // distinguish between clicking on the 2 different dropboxes 
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowItems(false);
            }
        }
        
        // close the menu if user clicks anywhere else on the screen
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const clickDropdown = (event) => {
        setShowItems(!showItems);
    }

    const getSelectedText = () => {
        if (!selectedItems || selectedItems.length === 0) {
            return emptyDisplayText;
        }

        if (isMulti) {
            // multi-select; selectedItems = array of items
            return (
                <div className="dropdown-selections">
                    {selectedItems.map((item) => (
                        <div key={item.value} className="dropdown-selection">
                            {item.displayText}
                            <button onClick={(event) => onRemoveSelection(event, item)} className="dropdown-remove-selection">
                                X
                            </button>
                        </div>
                    ))}
                </div>
            )
        }

        // single-select; selectedItems = one item
        return (<div key={selectedItems.value} className="dropdown-selection">
                    {selectedItems.displayText}
                    <button onClick={(event) => onRemoveSelection(event, selectedItems)} className="dropdown-remove-selection">
                        X
                    </button>
                </div>);
    };

    const removeSelection = (item) => {
        return selectedItems.filter((otherItem) => otherItem.displayText !== item.displayText);
    }
    const onRemoveSelection = (event, item) => {
        event.stopPropagation();

        if (isMulti) {
            const keptSelections = removeSelection(item)
            setSelectedItems(keptSelections);
        } else {
            setSelectedItems(null)
        }
    }

    const clickItem = (item) => {

        if (isMulti) {
            if (selectedItems.includes(item)) {
                setSelectedItems(removeSelection(item));
            } else {
                setSelectedItems(selectedItems.concat(item));
            }
        } else {
            setSelectedItems(item);
        }
    }

    const clearItems = () => {
        setSelectedItems(isMulti ? [] : null);
    }

    const selectAllItems = () => {
        setSelectedItems(items);
    }

    const isSelected = (item) => {
        if (!selectedItems || selectedItems.length === 0) return false;
        
        if (isMulti) {
            return selectedItems.includes(item)
        }
        return selectedItems.displayText === item.displayText;
    }

    const getDropDownMenu = () => {
        return (
            items.map((item) => (
                <div onClick={() => clickItem(item)}
                    key={item.value} className={`dropdown-menu-item ${isSelected(item) && "selected"}`}>
                    {item.displayText}
                </div>
            ))
        );
    };

    return (
        <div className="dropdown-menu-container">
            <div className="dropdown-menu-title">{itemsTitle}</div>
            <div onClick={clickDropdown} ref={dropdownRef} className="dropdown-menu-input-box">
                <div className="dropdown-menu-selected">
                    {getSelectedText()}
                </div>
            </div>
            {showItems && 
            (<div className="dropdown-menu">
                {isMulti && <div onClick={() => selectAllItems()} className="dropdown-menu-select-all-items">Select All</div>}
                <div onClick={() => clearItems()} className="dropdown-menu-clear-items">Clear All</div>
                {getDropDownMenu()}
            </div>)}
        </div>
    );
};

export default DropdownMenu;