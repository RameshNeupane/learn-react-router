// import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const Github = () => {
    const data = useLoaderData();
    // const { username } = useParams();
    // console.log(username);
    // const [data, setData] = useState({});
    // useEffect(() => {
    //     const fetchGithubInfo = async () => {
    //         try {
    //             const response = await fetch(
    //                 `https://api.github.com/users/${username}`
    //             );
    //             const data = await response.json();
    //             setData(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchGithubInfo();
    // }, [username]);
    return (
        <div className="relative flex items-top gap-3 justify-center bg-white sm:items-center lg:py-6 sm:pt-0">
            <img
                src={data?.avatar_url}
                alt="github profile picture"
                className="rounded-lg"
                width={300}
            />
            <div className="flex flex-col">
                <span className="text-3xl font-bold">Github</span>
                <span className="font-medium">Username: {data?.login}</span>
                <span className="font-medium">Fullname: {data?.name}</span>
                <span className="font-medium">
                    Followers: {data?.followers}
                </span>
                <span className="font-medium">
                    Following: {data?.following}
                </span>
                <span className="font-medium">Repos: {data?.public_repos}</span>
            </div>
        </div>
    );
};

export default Github;

export const githubInfoLoader = async (username) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}`
        );
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
