import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getBugs } from '../../Controlers/Redux/bugSlice';
import BugCard from '../BugCard/BugCard';

export default() => {
    const dispatch = useDispatch();
    const {bugs} = useSelector(state=>state);

    useEffect(() => {
        dispatch(getBugs());
    }, [bugs.length < 1])

    return (
        <div className="page-container">
            {bugs.map((bug,key)=>(
                <BugCard key={key} bug={bug} />
            ))}
        </div>
    )
}

