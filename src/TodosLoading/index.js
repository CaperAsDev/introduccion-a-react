import React from "react";
import ContentLoader from "react-content-loader";

function TodosLoading(props) {
    return (
        
        <ContentLoader 
            speed={2}
            width={850}
            height={800}
            viewBox="0 0 850 800"
            backgroundColor="#827dca"
            foregroundColor="#ecebeb"
            {...props}
        >
            <circle cx="790" cy="25" r="22" /> 
            <rect x="23" y="35" rx="5" ry="5" width="780" height="80" /> 

            <circle cx="790" cy="152" r="22" /> 
            <rect x="25" y="165" rx="5" ry="5" width="780" height="80" /> 

            <circle cx="790" cy="290" r="22" /> 
            <rect x="25" y="300" rx="5" ry="5" width="780" height="80" /> 
        </ContentLoader>
    )
}

export { TodosLoading }