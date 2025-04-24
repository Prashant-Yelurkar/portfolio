import React, { useEffect } from 'react'
import Home from '.'
import { useRouter } from 'next/router'

const Tab = () => {
    const router = useRouter()

    const tab = router.query.tab



    return (
        <Home
            router={router}
            tab={tab} />
    )
}

export const getServerSideProps = async (context) => {
    return {
        props: {
            query: context.params,
        },
    };
};

export default Tab


