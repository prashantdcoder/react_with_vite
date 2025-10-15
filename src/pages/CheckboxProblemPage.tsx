import React from 'react';
import CheckboxTree from '../components/CheckboxTree/CheckboxTree';
import { permissions } from '../data/appData';

const CheckboxProblemPage: React.FC = () => {
    return (
        <div>
            <CheckboxTree initialData={permissions} />
        </div>
    )
}

export default CheckboxProblemPage