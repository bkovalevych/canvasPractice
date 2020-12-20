import React, {useEffect} from "react";

export const Profile = ({getProfile, email, isGetUserFetched, fetching, errors, firstName, lastName}) => {
    useEffect(() => {
        debugger;
        console.log(email);
        if (fetching === false) {
            getProfile({email});
        }
    }, [getProfile, email,])

    if (fetching) {
        debugger
        return "wait";
    }
     else if (isGetUserFetched) {
        debugger
        return (<>
            <div>
                <p>
                    {firstName}
                </p>
                <p>
                    {lastName}
                </p>

            </div>
        </>)
    }else if (errors) {
        debugger
        return errors.toString();
    }
    return (<>Not found</>)
}