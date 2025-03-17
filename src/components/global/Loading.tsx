import { PulseLoader } from 'react-spinners';
import {LengthType} from "react-spinners/helpers/props";


type LoadingProps = {
    loading?: boolean;
    size?: LengthType;
    color?: string;
};


const Loading: React.FC<LoadingProps> = ({ loading = true, size = 20, color = "#011818" }) => {
    return (
        <div>
            <PulseLoader loading={loading} size={size} color={color} />
        </div>
    );
};

export default Loading;
