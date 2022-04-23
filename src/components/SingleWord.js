import React, { useMemo } from 'react';
import { getRandom } from '../utils/utils'

const SingleWord = ({ word }) => {
    const marginLeft = useMemo(() => getRandom(10, 90) + '%', []);

    return (
        <div
            style={{ marginLeft: marginLeft }}
            className="word"
        >
            {word}
        </div>
    )
}

export default SingleWord;