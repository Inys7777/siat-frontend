import UserLayout from '../UserLayout'
import {Container, Row, Col, Form, Button, Card} from 'react-bootstrap'
const RestaurantList = () => {
    return(
        <UserLayout>
            <Row>
                <Col>
                    <Card>
                        <div className=''>김치</div>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <div className='mandu'>만두</div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <div className=' d-flex justify-content-center'>
                    <p>메인식당이미지</p>
                </div>
            </Row>
        </UserLayout>
    )
}

export default RestaurantList