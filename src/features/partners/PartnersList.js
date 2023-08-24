import { useSelector } from 'react-redux';
import { Col, } from 'reactstrap';
import { PARTNERS } from '../../app/shared/PARTNERS';
import { selectAllPartners } from './partnersSlice.js';
import Partner from './Partner';



function PartnersList() {
    const partners = useSelector(selectAllPartners);

    return (
        <Col className='mt-4'>
            {partners.map((partner) => (
                <div className='d-flex mb-5' key={partner.id}>
                    <Partner partner={partner} />
                </div>
            ))}
        </Col>
    );
}

export default PartnersList;