import React from 'react';

function useLocalStorage(itemName, initialValue) {
  
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);

    const [item, setItem] = React.useState(initialValue);

    React.useEffect(() => {
        setTimeout(() => {
        try {
            console.log('useEffect ejecutandose');
            const locaStorageItem = localStorage.getItem(itemName);
            let parsedItem;
        
            if (!locaStorageItem) {
            localStorage.setItem(itemName, JSON.stringify([]));
            parsedItem = initialValue;
            } else {
            parsedItem = JSON.parse(locaStorageItem);
            }

            setItem(parsedItem);
            setLoading(false);
        } catch (error) {
            setError(error)
        }
        }, 2000)
    },[]);


    const saveItem = (updateItem) => {
        try {
        const stringyfiedItem = JSON.stringify(updateItem);
        localStorage.setItem(itemName, stringyfiedItem);
        setItem(updateItem); 
        } catch (error) {
        setError(error);
        }
    };

    return {item, saveItem, loading, error};

};

export { useLocalStorage };