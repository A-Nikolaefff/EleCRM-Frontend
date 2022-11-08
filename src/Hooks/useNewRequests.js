import {useState} from "react";

export const useNewRequests = () => {
    const [isLoading, setIsLoading] = useState(false);

    const setIsNewRequestListLoading = (isLoading) => {
        setIsLoading(isLoading);
    }

    return [setIsNewRequestListLoading, isLoading];
}