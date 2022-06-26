import { QRCode } from 'react-qrcode-logo';
import Backdrop from '@mui/material/Backdrop';

type Props = {
    open: boolean;
    onClose: () => void;
}

export const QR = (props: Props) => {
    return (
        <Backdrop open={props.open} onClick={props.onClose}>
            <QRCode value='https://www.youtube.com/' />
        </Backdrop>
    )
}