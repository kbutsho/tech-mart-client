import { useRouter } from 'next/router';
import React from 'react';

const Category = () => {
    const router = useRouter();
    const { categoryName } = router.query;

    // cannot apply server side rendering
    // need to implement axios
    return (
        <div>
            {categoryName}
        </div>
    );
};

export default Category;