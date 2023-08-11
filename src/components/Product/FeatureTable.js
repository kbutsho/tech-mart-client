import styles from '@/styles/product/product.module.css'

const FeaturesTable = ({ features, description }) => {
    const renderValue = (value) => {
        if (Array.isArray(value)) {
            return value.join(', ');
        } else if (typeof value === 'object') {
            return (
                <ul>
                    {Object.keys(value).map((key, index) => (
                        <li key={index}>
                            {key}: {value[key]}
                        </li>
                    ))}
                </ul>
            );
        }
        return value;
    };
    const rows = Object.keys(features).map((key, index) => (
        <tr key={index}>
            <td className={`px-3 ${styles.feature}`}>{key}</td>
            <td className={`px-3 ${styles.feature}`}>{renderValue(features[key])}</td>
        </tr>
    ));

    return (
        <table className="table table-bordered">
            <tbody className="thead-light">
                <tr>
                    <th className='p-3' colSpan="2">Special features</th>
                </tr>
                {rows}
                <tr>
                    <td className={`px-3 ${styles.feature}`}>Description</td>
                    <td className={`px-3 ${styles.feature}`}>{description}</td>
                </tr>
            </tbody>
        </table>
    );
};

export default FeaturesTable;
