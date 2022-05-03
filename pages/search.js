import React from "react";
import {Layout} from "../components/layout";
import {useRouter} from "next/router";

const Search = () =>{
    const router = useRouter();
    return (
        <Layout>
            <div>
                {router.query.title}
            </div>
            <div>
                {router.query.category}
            </div>
        </Layout>
        )

}

export default Search;
