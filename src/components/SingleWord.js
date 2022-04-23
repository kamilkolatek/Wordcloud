import React, { useState, useMemo } from 'react';
import { getRandom } from '../utils/utils'

const SingleWord = ({ word, isChecked, isCorrect }) => {
    const [isSelected, setIsSelected] = useState(false);
    const marginLeft = useMemo(() => getRandom(10, 90) + '%', []);

    const handleClick = () => {
        if (isChecked) return;
        setIsSelected(!isSelected);
    }

    const getClassName = () => {
        let className = 'word';
        if (isSelected) {
            className += ' selected';
            if (isChecked) {
                if (isCorrect) className += ' correct';
                else className += ' incorrect'
            }
        }
        return className;
    }

    return (
        <div
            style={{ marginLeft: marginLeft }}
            className={getClassName()}
            onClick={() => handleClick()}
        >
            <div className="label">
                {isChecked && isSelected && (isCorrect ? 'Good' : 'Bad')}
            </div>
            {word}
        </div>
    )
}

export default SingleWord;