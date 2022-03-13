import React from 'react';

const Movies = ({movieName}) => {
    return (
        <div>
            <div>
                <div>{movieName.title}</div>
                <div>{movieName.since}</div>
            </div>
        </div>
    );
};

export default Movies;
