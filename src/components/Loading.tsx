import React from "react";

interface LoadingProps {
    loading: boolean;
    children: React.ReactNode | React.ReactNode[];
}

const Loading: React.FC<LoadingProps> = ({ loading, children }) => {

    if (loading) {
        return <h1>Loading...</h1>;
    }

    return <>{children}</>;
};

export default Loading;